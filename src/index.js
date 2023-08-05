//import express library
const express = require('express');
//instantiate the express function
const app = express();
//create a PORT that will be use for the listening function
const PORT = 3001;

app.listen(PORT, ()=> console.log(`The Server is running on PORT: ${PORT}`))


