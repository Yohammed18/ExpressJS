//module use to read or write in a file
const fs = require('fs')
const FILE_NAME = '../assets/cities.json';

let cititesRepo = {
    //promise design patter
    get: function(resolve, reject){
        fs.readFile(FILE_NAME, function(err, data){
            if(err){
                reject(err)
            }else{
                resolve(JSON.parse(data))
            }
        })
    }
}

module.exports = cititesRepo;