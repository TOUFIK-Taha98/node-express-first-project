const http = require('http')

const server = http.createServer((req, res) => {
    console.log('INCOMING REQUEST');
    console.log(req.method, req.url);

    res.setHeader('Content-Type', 'text/html')
    res.end('<form><input type="text" name="username"><button>Create User</button></form>')
})

server.listen(5000);