const User= require("./user.js");
const Posts = require("./post.js");
const Comments = require("./comment.js");

User.hasMany(Posts, {
	foreignKey: "user_id",
	onDelete: "CASCADE"
});

Posts.belongsTo(User, {
	foreignKey: "user_id",
});

module.exports = {User, Posts};