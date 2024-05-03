// from here try to do the get requests for all the links in the header login/logout/dashboard/home
// the user should be prompted to login or create an account before they can view the website 
// upon creating an account, an email will be sent to the user to confirm their account creation
const router = require("express").Router();
const path = require("path");
const {Post, User} = require("../models");

router.get("/", async (rq, rs) => {
	console.log(Post);
	rs.status(200).json({message: "message"});
});

module.exports = router;
