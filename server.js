var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const logger = (req,res,next) => {
    console.log("Call to ", req.baseUrl + req.path);
    console.log("   Body:   ", req.body);
    console.log("   Params: ", req.params);
    console.log("   Method: ", req.method);
    console.log("   Headers:", req.headers);
    next();
}
app.use(logger);

const returner = (req) => ({
    "body":req.body,
    "query":req.params?.p || "",
    "headers":req.headers
});



app.get('/:p',(req,res)=>res.send(returner(req)));

app.post('/:p',(req,res)=>res.send(returner(req)));

app.put('/:p',(req,res)=>res.send(returner(req)));

app.delete('/:p',(req,res)=>res.send(returner(req)));

app.get('/',(req,res)=>res.send(returner(req)));

app.post('/',(req,res)=>res.send(returner(req)));

app.put('/',(req,res)=>res.send(returner(req)));

app.delete('/',(req,res)=>res.send(returner(req)));


PORT = 3000;
app.listen(PORT, ()=>{
  console.log('RESTful API mirror server started on: ' + PORT);
});
