const router = require("express").Router();
const path = require("path");

router.get("/", (rq, rs) => {
	// rs.sendFile(path.join(__dirname, "../../public/html/login.html"));
	// rs.sendFile(path.join(__dirname, "../../views/login.handlebars"));
	rs.render("login");
	console.log("viewing login page");

});

router.get("/", (rq, rs) => {

})

module.exports = router;