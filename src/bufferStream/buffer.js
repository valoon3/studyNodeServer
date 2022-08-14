const buffer = Buffer.from('저를 버퍼로 바꿔보세요.');

console.log('from : ', buffer);
console.log('length : ', buffer.length);
console.log('toString : ', buffer.toString());

const fs = require('fs');

const readStream = fs.createReadStream('./readMe2.txt', { highWaterMark: 16 });
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data', chunk, chunk.length);
})

readStream.on('end', () => {
    console.log('end : ', Buffer.concat(data).toString());
})

readStream.on('error', (err) => {
    console.log('error : ', err);
})
