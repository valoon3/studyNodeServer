const dotenv = require('dotenv');
dotenv.config({path: '../../.env'});
const path = require('path');

console.log(process.env.NODE_ENV);
console.log(process.env.COOKIE_SECRET);