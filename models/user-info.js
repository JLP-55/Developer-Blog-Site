const {Model, Datatypes} = require("sequelize");const
const sequelize = require("../config/connection");

class UserDetails extends Model {}

UserDetails.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		category_name: {
			type: DataType.STRING,
			allowNull: false,
		}
	},
	{
		sequlize, 
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "userDetails",
	}
);

module.exports = UserDetails;