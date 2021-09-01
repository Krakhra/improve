const express = require("express");
const User = require("../models/Users");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/test", async (req, res) => {
  try {
    const obj = {
      googleid: "123djsae323",
      displayName: "krakhra",
      firstName: "Kirat",
      lastName: "Rakhra",
    };
    const data = new User(obj);
    data.save();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
