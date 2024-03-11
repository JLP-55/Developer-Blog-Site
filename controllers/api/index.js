const router = require("express").Router();
const pageOne = require("./page.js")

router.use("/login", pageOne);

module.exports = router;