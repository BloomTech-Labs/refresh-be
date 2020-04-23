router.post('/login', (req, res) => {
    // implement login
    let { email, password } = req.body;
    Users.getUserBy({ email })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = signToken(user); 
          res.status(200).json({
            message: `Welcome ${user.username}!`,token});
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  
  
  });
// resgier codde

  router.post('/register', (req, res) => {
    // implement registration
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    Users.add(user)
      .then(user=>res.status(201).json(user))
      .catch(err=>{
        res.status(500).json(err)
      })
  });
  router.post("/register",  (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;
        Users.addUser(user)
        .then(user=>{
            if(user){
                const AddUser =  Users.addUser(user);
                const token = signToken(user);
                res.status(201).json({
                    message: `Thank you for registering, ${user.full_name}!`,
                    UserInfo: AddUser,
                    token: token,
                  })
                } else {
                    res
                    .status(401)
                    .json({ errorMessage: "Please fill out all required fields" });
                }
        })
        .catch(err=>{
            res.status(500).json(err)
          })
        
   
  });