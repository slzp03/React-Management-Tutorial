const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user:conf.user,
    password:conf.password,
    port:conf.port,
    database:conf.database
});

connection.connect();

const multer = require ('multer');
const upload = multer({dest:'./upload'});


app.get('/api/customers',(req,res)=>{
    connection.query(
        "select * from customer",
        (err, rows, fields) => {
            res.send(rows);
        }
    );
});

app.use('/image',express.static('./upload'));

app.post('/api/customers',upload.single('image'),(req,res) => {
    let sql = 'insert into customer values (null,?,?,?,?,?)';
    let image = 'http://localhost:5000/image/' + req.file.filename;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    console.log(name);
    console.log(birthday);
    console.log(gender);
    console.log(job);
    console.log(image);
    let params = [image, name, birthday, gender, job];
    connection.query(sql,params,
        (err, rows, fields)=>{
            res.send(rows);
        });
});

app.listen(port, () => console.log(`Listening on port ${port}`));