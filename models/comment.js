const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init (
	{
		id: {
			type: DataTypes.INTEGER,
			primarykey: true,
			allowNull: false,
			autoIncrement: true
		},
		created_at: {
			type: DataTypes.STRING,
			allowNull: false
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id"
			}
		},
		post_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "post",
				key: "id"
			}
		}
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "comment"
	}	
)

module.exports = Comment;