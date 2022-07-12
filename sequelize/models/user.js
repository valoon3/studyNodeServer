const sequelize = require('./index');
const {DataTypes} = require("sequelize");

const User = sequelize.define('user', {
    userID: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userPassword: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userGender: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize,
});

module.exports = User;