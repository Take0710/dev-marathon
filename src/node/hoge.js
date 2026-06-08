const express = require('express');
const cors = require('cors');
const app = express();
const port = 1985;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.send('Hello, World!を好きな文字に書き換えて');
});

app.post('/add-customer',(req,res) =>{
    console.log(req.body);
    res.json({success: true});
});

app.listen(port, ()=>{
    console.log(`Express app listening at http://localhost:${port}`);
});
