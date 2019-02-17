const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

// app.get('/api/hello', (req, res) => {
// res.send(
//     {message: 'Hello Express'}
// )
// });

app.get('/api/customers', (req, res)=>{
    //요청이 들어왔을떄 응답하는 REST API 
    res.send([

    ]);
});


app.listen(port, ()=>console.log('Listeneing on port ${port}'));