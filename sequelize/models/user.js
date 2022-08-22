const sequelize = require('./index');
const {DataTypes} = require("sequelize");

const User = sequelize.define('user', {
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
    // tableName: 'Employees' // 테이블의 이름을 직접 알려주는 방법
    charset: 'utf8',
    collate: 'utf8_general_ci',
});

// user.sync() : 테이블이 존재하지 않으면 생성, 존재하면 아무것도 하지 않음
// user.sync({ force : true }) : 테이블이 존재하면 삭제하고 다시 생성
// user.sync({ alter : true }) : 테이블의 현재 상태를 확인한 후 모델에 맞게 현재 상태를 수정

(async () => {
    await sequelize.sync({ alter: true });

    // 테스트 코드를 작성할 수 있겠다.
    // const jane = await User.create({ userID: "valoon2" });

    // const jane = await User.build({ userID: "valoon2" });
    // console.log(jane instanceof User);
    // console.log(jane.userID);
    // console.log(jane.toJSON());
})();


console.log(User === sequelize.models.user);

module.exports = User;