const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res)=>{
    res.send([
        {
        'id' : 1,
        'image' : 'http://placeimg.com/64/64/1',
        'name' : '김명훈',
        'birthday' : '951123',
        'gender' : '남',
        'job' : '무직'
        },
        {
        'id' : 2,
        'image' : 'http://placeimg.com/64/64/2',
        'name' : '김다훈',
        'birthday' : '940513',
        'gender' : '남',
        'job' : '직장인'
        },
        {
        'id' : 3,
        'image' : 'http://placeimg.com/64/64/3',
        'name' : '인화심',
        'birthday' : '611130',
        'gender' : '여',
        'job' : '직장인'
        }
        ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));