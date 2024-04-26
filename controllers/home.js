// from here try to do the get requests for all the links in the header login/logout/dashboard/home
// the user should be prompted to login or create an account before they can view the website 
// upon creating an account, an email will be sent to the user to confirm their account creation
const router = require("express").Router();
const path = require("path");
const {Post, User} = require("../models");

router.get("/", async (rq, rs) => {
	// try {
	// 	resp.status(200).mail();
	// } catch (err) {
	// 	resp.status(500).json(err);
	// };

	try {
		const postDate = await Post.findAll({
			include: [
				{
					model: User,
					attributes: ["user_name"]
				},
			]
		})
	} catch (err) {
		rs.status(500).json(err);
		console.log(err);
	}

	// resp.sendFile(path.join(__dirname, "../public/html/index.html"));
	// // resp.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
	// console.log("viewing home page");
});

module.exports = router;
