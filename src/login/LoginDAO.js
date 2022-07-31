const db = require('../../mysql/index');

const login = async function(callback, user) {
    // https://github.com/sidorares/node-mysql2
    const sql = 'select * from `user` where `userID` = ? and `userPassword` = ?';

    const [rows, field] = await db.query(sql, [user.userID, user.userPassword]);
    callback(rows);
}

module.exports = { login }