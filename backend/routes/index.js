const express = require("express");
const User = require("../models/Users");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/login", async(req, res) =>{
  const oldUser = await User.findOne({googleid:req.body.params.googleid})
  
  if(oldUser){
    res.send(oldUser)
  }
  else{
    try{
      const obj = {
        googleid: req.body.params.googleid,
        firstName: req.body.params.firstName,
        lastName: req.body.params.lastName,
        score:600
      }
  
      const data = new User(obj)
      data.save().then((msg)=>{
        res.send(data)
      })
    }
    catch(err){
      res.send(err)
    }  
  }
})

module.exports = router;
