const express = require("express");
const passport = require("passport")
const router = express.Router()

// authenticate with google
// get request to /auth/google
router.get("/google",passport.authenticate('google',{scope:['profile']}))

// google auth callback
// get request to /auth/google/callback
router.get("/google/callback",passport.authenticate('google',{failureRedirect:'/'}),(req,res)=>{
    console.log("test")
})

module.exports = router