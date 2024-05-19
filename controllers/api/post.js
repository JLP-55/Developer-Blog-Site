const router = require("express").Router();
const path = require("path");

router.get("/", async (rq, rs) => {
	try {
		console.log("hello");
		rs.status(200).json({message: "hello"});
	} catch (err) {
		rs.status(err);
		console.log(err);
	}
})

module.exports = router;