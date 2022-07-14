const sequelize = require('../../sequelize/models/index');
const User = require('../../sequelize/models/user');

const user = async () => {
    try{
        const users = await User.findAll();
        console.log(users.every(user => user instanceof User)); // true

        console.log("All users: ", JSON.stringify(users, null, 2));

        return
    } catch(err){
        console.log(err);
    }
}

module.exports = user;
