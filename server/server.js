const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const port = 8081;
const api = require('./api');

router.use('/', async(req,res, next)=>{
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(await api(req.body));
    next();
})

app.get('/mongo', (req,res,next)=>{
   
    res.json({data:'data'})
})

app.use(bodyParser.json())

app.use ('/api',router);
app.use('/', express.static(__dirname + '/public'))
//app.get('/posts', express.static(__dirname + '/public') )
app.listen(port, () => console.log(`Example app listening on port ${port}!`))