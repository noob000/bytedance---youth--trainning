const http = require('http');
const fs = require('fs');
http.createServer((request, response) => {
    //console.log('a request',getPrototypeChain(request));
    //response.end('hi node');
    const { url, method } = request;
    if (url === '/' && method === "GET") {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                response.writeHead(500, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                response.end('500 看到这个说明你的服务器挂了');
                return
            }
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            response.end(data)
        })
    }
    else if (url === '/users' && method === "GET") {
        response.writeHead(200, {
            'Content-Type': 'application.json'
        })
    }
    else if (method === 'GET' && Headers.accept.indexOf('image/*')) {
        fs.createReadStream('.' + url).pipe(response)
    }
    else {
        response.statusCode == 404
        response.setHeader("Content-Type", 'text/plain;charset = utf-8');
        response.end('404 没找到')
    }
})
    .listen(3002, () => {
        console.log('sever at 3002')
    })
function getPrototypeChain(obj) {
    const protoChain = [];
    while (obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj)
    }
    return protoChain;
}