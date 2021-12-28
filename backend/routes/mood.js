const express = require("express");
const User = require("../models/Users");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Here Mood");
});

router.post("/addJournal", async (req, res) => {
  const moodObj = {
    value: 10,
    journal: "This is a journal entry",
  };

  const googleid = req.body.params.googleid;

  const mood = await User.findOne({ googleid: googleid });

  mood.mood.push(moodObj);
  mood.save();

  res.send("Done");
});

router.get("/getJournals", async (req, res) => {
  const googleid = req.body.params.googleid;

  const moods = await User.findOne({ googleid: googleid });

  res.send(moods.mood);
});
module.exports = router;
