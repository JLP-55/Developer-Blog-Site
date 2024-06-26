const User = require("./user.js");
const Post = require("./post.js");
const Comment = require("./comment.js");

User.hasMany(Post, {
	foreignKey: "user_id",
	onDelete: "CASCADE"
});

Post.belongsTo(User, {
	foreignKey: "user_id",
});

Comment.belongsTo(Post, {
	foreignKey: "post_id"
});

Comment.belongsTo(User, {
	foreignKey: "user_id"
});

module.exports = {User, Post, Comment};