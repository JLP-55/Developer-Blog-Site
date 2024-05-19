const router = require("express").Router();
const loginPage = require("./page.js");
const postRoutes = require("./post.js");

router.use("/login", loginPage);
router.use("/post", postRoutes);

module.exports = router;