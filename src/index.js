//import express library
const express = require('express');
//instantiate the express function
const app = express();
//use the epress Router object
let router = express.Router();
//initialize a port that will be use by the server
const PORT = 3000;

//create GET to return a list of cities
router.get('/', (request, response, next)=>{
    response.send('Boston')
})

//configure the router so all routers all prefixed with /api/v1
app.use('/api', router)

//create the server that will listen to the port
app.listen(PORT, ()=>{
    console.log(`The Server is running on PORT; ${PORT}`)
})