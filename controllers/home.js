// from here try to do the get requests for all the links in the header login/logout/dashboard/home
// the user should be prompted to login or create an account before they can view the website 
// upon creating an account, an email will be sent to the user to confirm their account creation
const router = require("express").Router();
const path = require("path");

const mail= require("nodeMailer");

router.get("/", async (req, resp) => {
	// try {
	// 	resp.status(200).mail();
	// } catch (err) {
	// 	resp.status(500).json(err);
	// };

	resp.sendFile(path.join(__dirname, "../public/html/index.html"));
	// resp.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
	console.log("viewing home page");
});

module.exports = router;

// app.get("/", (req, resp) => {
// });