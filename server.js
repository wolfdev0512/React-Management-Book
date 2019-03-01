const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user : conf.user,
    password : conf.password,
    port : conf.port,
    database: conf.database
});

connection.connect();


// app.get('/api/hello', (req, res) => {
// res.send(
//     {message: 'Hello Express'}
// )
// });

app.get('/api/customers', (req, res)=>{
    //요청이 들어왔을떄 응답하는 REST API 
    connection.query(
      "SELECT * FROM CUSTOMER",
      (err, rows, fields) => {
        console.log(rows);
        res.send(rows);
      }
    )
    // res.send();
    // res.send([
    //     {
    //       'id': 1,
    //       'image': 'https://placeimg.com/64/64/1',
    //       'name': '박제창',
    //       'birthday': '8881228',
    //       'gender': 'male',
    //       'job': '대학원생'
    //     },
      
    //     {
    //       'id': 2,
    //       'image': 'https://placeimg.com/64/64/2',
    //       'name': '박아창',
    //       'birthday': '88832488',
    //       'gender': 'male',
    //       'job': '대학원생'
    //     },
      
    //     {
    //       'id': 3,
    //       'image': 'https://placeimg.com/64/64/3',
    //       'name': '박보검',
    //       'birthday': '888822318',
    //       'gender': 'male',
    //       'job': '대학원생'
    //     },
      
      
    //   ]);
});


app.listen(port, ()=>console.log('Listeneing on port ${port}'));