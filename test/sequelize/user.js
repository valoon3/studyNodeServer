const { Op } = require('sequelize');
const user = require('../../sequelize/models/user');

// Ot.gt 초과
// Ot.gte 이상
// Ot.lt 미만
// Ot.lte 이하
// Ot.ne 같지 않음
// Ot.or 또는
// Ot.in 배열 요소 중 하나
// Ot.or 배열 요소와 모두 다름

console.log("loaded : ", user);
// select name, age from node.user where userPassword = '1234' and age> 30;
user.findAll({
    attributes: ['userID', 'userPassword'],
    where: {
        userPassword: '1234',
        // age: { [Op.gt] : 30 }
    }
    // order: [['age', 'DESC']],
    // limit: 1,
    // include :[{
    //
    // }]

    // include: [{
    //    model: Comment, (관계가 설정되있는 테이블)
    // }]
})
    .then(data => {
        console.log('findall : ', data)
    })

// user.fineOne({})

// user.update({
//     comment: '바꿀 나용',
// }, {
//     where: {
//         id:2
//     },
// })

// user.destroy({
//     where: {
//         id: 2,
//     }
// })