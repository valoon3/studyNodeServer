const sequelize = require('./index');
const {DataTypes} = require("sequelize");

const User = sequelize.define('user', {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    // },
    userID: {
        type: DataTypes.STRING,
        allowNull: true,
        primaryKey: true,
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
    timestamps: false,
});

module.exports = User;