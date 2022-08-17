const express = require('express');
const router = express.Router();

// url : /users/123?limit=5&skip=10
router.get('/user/:id', (req, res) => {
    console.log(req.params, req.query);
});
// 결과  req.params : { id: '123' } req.query : { limit: '5', skip: '10' }

router.use((req, res, next) => {
    res.status(404).send('Not Found'); // 가능하면 마지막에 고정적으로 404 명시적으로 해주자
})

router.route('/abc') // 주소가 같은 경우 이렇게 하나의 덩어리로 해결하자.
    .get((req, res) => {
        res.send('GET /abc');
    })
    .post((req, res) => {
        res.send('POST /abc');
    })

//:id 에 해당하는 1이나 123을 조회할 수 있다는 점이다.
// req.params 객체 안에 들어있다.
// :id 이면 req.params.id 로
// :type 이면 req.params.type 으로 조회할 수 있다.

// == 주의 ==
// 일반 라우터보다 뒤에 위치해야 한다는 것이다.
// 다양한 라우터를 아우르는 와일드카드 역할을 하므로 일반 라우터보다는 뒤에 위치해야 다른 라우터를 방해하지 않는다.