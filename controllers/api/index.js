const router = require("express").Router();
const pageOne = require("./page.js")

router.use("/testpage", pageOne);

module.exports = router;