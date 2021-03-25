var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const returner = (req) => ({
    

    "body":req.body,
    "query":req.params.p,
    "headers":req.headers
});


app.get('/:p',(req,res)=>res.send(returner(req)));

app.post('/:p',(req,res)=>res.send(returner(req)));

app.put('/:p',(req,res)=>res.send(returner(req)));

app.delete('/:p',(req,res)=>res.send(returner(req)));

PORT = 3000;
app.listen(PORT, ()=>{
  console.log('RESTful API mirror server started on: ' + PORT);
});
