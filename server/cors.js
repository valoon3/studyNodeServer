// corsOption 설정
const allowList = ['http://localhost:3000'];

const corsOptions = {
    origin: function(origin, callback) {
        if(allowList.indexOf(origin)  !== -1 ) {
            callback(null, true);
        } else {
            callback(new Error('cors 오류를 발생시켰다!'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;