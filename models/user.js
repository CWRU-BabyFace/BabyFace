module.exports = function(sequelize, DataTypes){
	var User = sequelize.define("User", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [5]
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [5]
			}
		},
	}),
	User.associate = function(models){
		User.hasMany(models.Child, {
			onDelete: "cascade"
		});
	};

	return User;
};