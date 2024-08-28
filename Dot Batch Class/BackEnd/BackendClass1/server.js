
// Server Instantiate
const express = require ('express');
const app = express();

// Used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');

// Specifically parse json data & add it to the request.body object
app.use(bodyParser.json());

// Activate the sever on 3000 port
app.listen(3000, () => {
    console.log('Server Started at port no. 3000');
})

// Routes
app.get('/',(request,response) => {
    response.send("Hello babes , how are you");
})

app.post('/api/cars', (request,response) => {
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send('Car Submitted Successfully');

})

// Connection between server and database

const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/myDataBase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then( () => {
    console.log('Connection Successfull');
})
.catch( (error) => {
    console.log('Received an error');
})