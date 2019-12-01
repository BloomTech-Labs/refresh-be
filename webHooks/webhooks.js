const router = require("express").Router();
const { spawn, exec } = require("child_process");
let crypto = require("crypto");
const gitSecret = process.env.GIT_SECRET;

router.post("/github", (req, res) => {
  //Verifiy Signature
  const sig =
    "sha1=" +
    crypto
      .createHmac("sha1", gitSecret)
      .update(JSON.stringify(req.body))
      .digest("hex");

  //The Secret Matches
  if (req.headers["x-hub-signature"] == sig) {
    const gitPull = spawn("git", ["pull"]);
    const runNpm = spawn("npm", ["i"]);
    gitPull.stdout.on("data", data => {
      console.log(`Server Updated: ${data}`);
    });

    gitPull.stdout.on("error", data => {
      console.log(`Something Wen't Wrong ${data}`); //Was there an error?
    });

    gitPull.stdout.on("close", data => {
      res.status(200).json({ thankyou: "github" }); //End the stream on close
    });
  } else {
    res
      .status(401)
      .json({ message: "Not Today Spider-Man", error: "Your Secret is Wrong" });
  }
});

router.post("/client", (req, res) => {
  //Verifiy Signature
  const sig =
    "sha1=" +
    crypto
      .createHmac("sha1", gitSecret)
      .update(JSON.stringify(req.body))
      .digest("hex");

  //The Secret Matches
  if (req.headers["x-hub-signature"] == sig) {
    
    exec("sh ./webHooks/updateClient.sh");
    //No Debugging Here
    return res.status(200).json({ thankyou: "github" });
  } else {
    res
      .status(401)
      .json({ message: "Not Today Spider-Man", error: "Your Secret is Wrong" });
  }
});

module.exports = router;
