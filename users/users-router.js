const express = require("express");
const router = express.Router();
const Users = require("./users-model.js");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secrets");
const bcrypt = require("bcryptjs");

//Multer Settings (image uploading)
const multer = require('multer')
const uploads = ('uploads')
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, uploads)
  },
  filename: function(req, file, cb){
    // Date.Now() here allows back-end to save files with the same name
    cb(null, Date.now() + file.originalname) 
  }
})
const fileFilter = (req,file,cb)=>{
  // Only accept jpeg or png's
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true);
  } else{
    cb(new Error('Image must be JPEG or PNG and under 5MBS'), false);
  }
}
const upload = multer({
  storage: storage, 
  limits:{
  fileSize: 1024 * 1024 * 5 // Allow Image up to 5MBS
  },
  fileFilter: fileFilter
});
// Upload Image to User Avatar Field
router.put("/avatar/:id",upload.single('avatar'), async (req, res, next) => {
  req.body.avatar = req.file.path
  const { id } = req.params;
  try {
    const UpdatedUser = await Users.uploadAvatar(id, req.body);
    if (UpdatedUser) {
      res
        .status(200)
        .json({ message: "Image Uploaded Successfully!", count: UpdatedUser });
    } else {
      res
        .status(400)
        .json({ error: "Image Must be PNG or JPEG and under 5MBS" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not add Image to the Database: Back-end Issue" });
  }
});

// Register
router.post("/register", async (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;
  try {
    if (user) {
      const AddUser = await Users.addUser(user);
      const token = signToken(user);
      res.status(201).json({
        message: `Thank you for registering, ${user.full_name}!`,
        UserInfo: AddUser,
        token: token,
      });
    } 
  } catch (error) {
    if (error.code === '23502') {      
      res.status(400).json({ errorMessage: "Please fill out all required fields" });
    }

    if (error.code === '23505') {
      res.status(409).json({ errorMessage: "This email already exists" });
    }
    console.log(error);
    res.status(500).json({ errorMessage: "Error adding user to the database", error: error.detail });
  }
});

// Login 
router.post("/login", (req, res) => {
  let { email, password } = req.body;
  Users.getUserBy({ email })
    .first()
    .then(async (user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const GetUser = await Users.getUserBy(user);
          const sendUserInfo = GetUser[0];
          
        const token = signToken(user);
        res.status(200).json({
          message: `User login successful ${user.full_name}`,
          UserInfo: sendUserInfo,
          token: token,
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Could not login user" });
    });
});
// Get All Users
router.get("/", async (req, res) => {
  try {
    const AllUsers = await Users.getUsersProfiles();
    res.status(200).json(AllUsers);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Could not retrieve users from the database" });
  }
});
// Get User By ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Users.getUserProfileById(id)
    .then((user) => {
        if (user) {
            const GetUser = Users.getUserBy(user);
        res.json(user);
      } else {
        res.status(404).json({
          message: "Could not find user with given id.",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to get user" });
    });
});
// Get User Metrics by User ID
router.get("/:id/metrics", (req, res) => {
  const { id } = req.params;

  Users.getUserMetrics(id)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({
          message: "Could not find user with given id.",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to get user" });
    });
});
// Change User Metrics by User ID
router.put("/:id/metrics", async (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  try {
    const UpdatedMetrics = await Users.updateUserMetrics(id, changes);
    if (UpdatedMetrics) {
      res.status(200).json({ message: "Update Successful", changes });
    } else {
      res
        .status(400)
        .json({ error: "Please make sure you filled out all required fields" });
    }
  } catch (error) {
    res.status(500).json({ error: "Could not update Metrics in database" });
  }
});
// Get User Team Name By User ID
router.get("/:id/team", (req, res) => {
  const { id } = req.params;

  Users.getUserTeamName(id)
    .then((name) => {
      if (name) {
        res.json(name);
      } else {
        res.status(404).json({
          message: "Could not find team with given id.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get team" });
    });
});
// Add User to DB(redundant due to register endpoint)
router.post("/", async (req, res) => {
  const user = req.body;
  try {
    if (user) {
      const AddedUser = await Users.addUser(user);
      res.status(200).json(AddedUser);
    } else {
      res.status(400).json({ error: "Please provide a user" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not add user to the database" });
  }
});
// Delete User by User ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const DeleteUser = await Users.deleteUser(id);
    if (DeleteUser) {
      res
        .status(200)
        .json({ message: "Deleted User Successfully", count: DeleteUser });
    } else {
      res.status(400).json({ error: "User with specified ID does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not remove user from the database" });
  }
});
router.put("/:id", async (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  try {
    const UpdatedUser = await Users.updateUser(id, changes);
    if (UpdatedUser) {
      res
        .status(200)
        .json({ message: "Update Successful", count: UpdatedUser });
    } else {
      res
        .status(400)
        .json({ error: "Please make sure you filled out all required fields" });
    }
  } catch (error) {
    console.log(error);
    console.log(error);
    res.status(500).json({ error: "Could not update user in database" });
  }
});

function signToken(user) {
  const payload = {
    user,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
