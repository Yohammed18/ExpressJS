//import express library
const express = require('express');
//instantiate the express function
const app = express();
//create a PORT that will be use for the listening function
const PORT = 3001;


//enabling middleware: is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle
//middlewear can be use to log
app.use(express.json);
app.use(express.urlencoded)

app.listen(PORT, ()=> console.log(`The Server is running on PORT: ${PORT}`))

//user list to tesp api
const userList = [
    {
        id:"1",
        name: "User One",
        job: "Software Engineer"
    },
    {
        id:"2",
        name: "User Two",
        job: "Doctor"
    },
    {
        id:"3",
        name: "User Thre",
        job: "Nurse"
    },
]


//GET Request (Fetch data from the server/db)
app.get('/api/users',(request, response) =>{
    response.send(userList);
})


//POST REQUEST (Creating a New resource)
app.post('/api/users', (request, response)=>{
 console.log(request.body)
 response.send(201)
})