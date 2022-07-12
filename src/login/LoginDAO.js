const sequelize = require('../../sequelize/models/index');
const User = require('../../sequelize/models/user');

// const selectUser = () => {
//
// };



const user = async (req, res) => {
    let a = User.findAll();
    return a;
}

console.log(user());

// const query = 'select * from user';
// sequelize.query(query)
//     .spread((result) => {
//         // 쿼리 실행 성공
//         console.log(result);
//     },{
//         // 쿼리 실행 실패
//     })

//export {selectUser}
