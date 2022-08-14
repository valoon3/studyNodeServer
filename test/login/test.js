console.log(module.exports == exports);

console.log(module.exports)

exports.ax = () => {
    console.log('ax');

}

exports.name = () => {
    console.log('name');

}

module.exports = at = () => {
    console.log('at');

}

module.exports = function test(){
    console.log('test');

}

module.exports.tt = () => {
    console.log('tt');
}

console.log(module.exports);

const test = module.exports;
console.log(test);
console.log(this);

// module.exports = '이런거';
//
// console.log(module.exports);
// console.log('require.cache : ', require.cache, '\n');
// console.log('require.main : ', require.main);

console.log(process.cwd());
console.log(__dirname);
const os = require('os');
const path = require('path');
console.log(os.type());
console.log(os.freemem());
console.log(path.sep);

