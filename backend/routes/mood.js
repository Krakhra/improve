const express = require("express");
const User = require("../models/Users");
const router = express.Router();
const axios = require("axios");

async function get_mood(){
  let url = "https://mood-text-class.herokuapp.com/getValue/i love coding";

  const promise = await axios.get(
    "https://mood-text-class.herokuapp.com/getValue/i love coding"
  );

  return promise.data
};

router.get("/addJournal", async (req, res) => {
  // const googleid = req.body.params.googleid;

  const mood = await User.findOne({ firstName: "Kirat" });

  // mood.mood.push(req.body.params.mood);

  new_score = await get_mood();

  switch(new_score){
    case "joy":
      mood.score += 15
      break 
    case "sadness":
      mood.score -= 10
      break
    case "fear":
      mood.score -= 5
      break
    case "anger":
      mood.score -= 5 
      break 
    case "surprise":
      mood.score += 5
      break 
    case "disgust":
      mood.score -= 5
      break
    case "shame":
      mood.score -= 5 
      break
    default:
      break 
  }
  
  mood.save()
  res.send("elo");
});

router.get("/getJournals", async (req, res) => {
  const googleid = req.body.params.googleid;

  const moods = await User.findOne({ googleid: googleid });

  res.send(moods.mood);
});
module.exports = router;
