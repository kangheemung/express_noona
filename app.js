const express = require('express');
//app만들어보자굿
const app = express();
const token = 'serser';
const checkAuth = (req, res, next) => {
    console.log('she has admin permission');
    next();
};
// next();를 반드시 써줘야 한다.
const checkToken = (req, res, next) => {
    if (token) {
        console.log('you have token');
        next();
    } else {
        res.send('you dont have token ');
    }
};
const getUser = (req, res) => {
    console.log('here is user info');
    res.send('here is user info');
};
//미들 웨어checkAuth
app.get('/users', checkAuth, checkToken, getUser);
//라우팅 기능
// app.get('/', (req, res) => {
// res.send('this is hellow noona world');
// });
// app.get('/about', (req, res) => {
//     res.send('this is all about express');
// });
// app.post('/about '()=>{
//     res.send("we save data")
// })

app.listen(3000, () => {
    console.log('server is on 3000');
});
