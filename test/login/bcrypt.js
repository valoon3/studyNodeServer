const bcrypt = require('bcrypt');

const password = 'abcd1234';
const salt = 5;

// =============== 비밀번호 암호화하기 ======================

// hash 비동기 콜백
bcrypt.hash(password, salt, (err, encryptedPassword) => {

})

// 동기 처리
const hash1 = bcrypt.hashSync(password, salt);
// 비동기 처리
// const hash2 = await bcrypt.hash(password, salt);

console.log(hash1);



// =============== 비밀번호 검증하기 =========================

// 비동기 콜백
bcrypt.compare(password, hash1, (err, same) => {
    console.log(same);
})

// 동기
const matchResult = bcrypt.compareSync(password, hash1);
console.log(matchResult);

// async/await
// const matchResult2 = await bcrypt.compare(password, hash1);
