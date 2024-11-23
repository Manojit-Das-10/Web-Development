
const express = require ('express');
const app = express();
const port = 3000;

app.get('/',(req,res) =>{
    res.send(`<h1>Hello Momi</h1>`)
})

app.post('/car',(req,res) => {
    res.send('Car data created');
})



app.listen(port,()=>{
    console.log('App Started');
})