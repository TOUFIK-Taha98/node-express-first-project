const express = require('express');

const app = express();

app.use((req, res, next) => {
    let body = '';
    req.on('end', () => {
        const userName = body.split('=')[1];
        if(userName){
            req.body = {name : userName};
        }
        next();
    });
    req.on('data', chunk => {
        body += chunk;
    });
})
app.use((req, res, next) => {
    if(req.body){
        return res.send('<h1>*User :'+ req.body.name);
    }
    res.send('<form method="POST"> <input type="text" name="username" > <button> Create User </button> </form> ')
})

app.get('/', (req, res) => {

})

app.listen(5000);