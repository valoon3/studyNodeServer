const http = require('http');
const fs = require('fs').promises;
const users = {};

http.createServer(async function(req, res) {
    try {
        console.log(req.method, req.url);
        if(req.method === 'GET') {
            if(req.url === '/') {
                const data = await fs.readFile('./restFront.html');
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                return res.end(data);
            }
            else if(req.url === '/about') {
                const data = await fs.readFile('./about.html');
                res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
                return res.end(data);
            }

            // 주소가 /도 /about 도 아니면
            try {
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            } catch(err) {
                // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found error 발생
                console.error(err);
            }
        }
        else if(req.method === 'POST') { // post 요청에서 사용자를 새로 저장하고 있다.
            if(req.url === '/user') {
                let body = '';
                // 요청의 body를 stream 형식으로 받음
                req.on('data', (data) => {
                    body += data;
                });
                // 요청의 body 를 stream 형식으로 받음
                return req.on('end', () => {
                    console.log('POST 본문(Body): ', body);
                    const { name } =JSON.parse(body);
                    const id = Date.now();
                    users[id] = name;
                    res.writeHead(201);
                    res.end('등록 성공');
                });
            }
        }
        else if(req.method === 'PUT') { // put에서는 아이디 요청대한 아이디의 사용자 데이터를 수정
            if(req.url.startsWith('/user/')) {
                const key = req.url.split('/')[2];
                let body = '';
                req.on('data', (data) => {
                    body += data;
                });
                return req.on('end', () => {
                    console.log('PUT 본문(Body) : ', body);
                    users[key] = JSON.parse(body).name;
                    return res.end(JSON.stringify(users));
                });
            }
            res.writeHead(404);
            return res.end('NOT FOUND');
        }
        else if(req.method === 'DELETE') {
            if(req.url.startsWith('/user/')) {
                const key = req.url.split('/')[2];
                delete users[key];
                return res.end(JSON.stringify(users));
            }
        }
        res.writeHead(404);
        return res.end('Not Found');
    } catch(err) {
        console.error(err);
        res.writeHead(500, {'Content-type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})
    .listen(8010, () => {
        console.log('8010번 포트에서 서버 대기 중')
    })