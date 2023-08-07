//import express library
const express = require('express');
//instantiate the express function
const app = express();
//use the epress Router object
let router = express.Router();
//import the cities
const cititesRepo = require('./repos/citiesRepo')
//initialize a port that will be use by the server
const PORT = 3000;
//create an array that will be use by the get response to return
let citites = cititesRepo.get();

//create GET to return a list of cities
router.get('/', (request, response, next)=>{
    // response.status(200).send(citites)
    //JSON evnvelope used to return data in a JSON object. (Added additional information for the user.)
    response.status(200).json({
        "status":200,
        "statusText":"OK",
        "message":"All cities have been retrieved.",
        "data":citites
    })
})

//configure the router so all routers all prefixed with /api/v1
app.use('/api', router)

//create the server that will listen to the port
app.listen(PORT, ()=>{
    console.log(`The Server is running on PORT; ${PORT}`)
})