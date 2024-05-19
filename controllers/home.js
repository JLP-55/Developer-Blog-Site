// from here try to do the get requests for all the links in the header login/logout/dashboard/home
// the user should be prompted to login or create an account before they can view the website 
// upon creating an account, an email will be sent to the user to confirm their account creation
const router = require("express").Router();
const path = require("path");
const {Post, User, Comment} = require("../models");

router.get("/", async (rq, rs) => {
	try {
		// render the login page from "views" folder
		rs.render("login");
		
	// 	const postData = await Post.findAll({
	// 		include: [
	// 			{
	// 				model: User,
	// 				attributes: ["user_name"],
	// 			}
	// 		]
		// });
	// 	const posts = postData.map((post) =>
	// 		post.get({plain: true})
	// 	);

	// 	rs.render("homepage", {
	// 		posts,
	// 	});
	} catch (err) {
		rs.status(500).json(err);
		console.log(err);
	}
});

// router.post("/", async (rq, rs) => {
// 	try {
		
// 	} catch (err) {
// 		rs.status(500).json(err);
// 		console.log(err);
// 	}
// })

module.exports = router;
