const router = require("express").Router();
const path = require("path");

router.get("/", (req, resp) => {
	resp.sendFile(path.join(__dirname, "../../public/html/login.html"));
	// resp.sendFile(path.join(__dirname, "../../views/login.handlebars"));
	console.log("viewing login page");
});

router.get("/", (req, resp) => {

})

module.exports = router;