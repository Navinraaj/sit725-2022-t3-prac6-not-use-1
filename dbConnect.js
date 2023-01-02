require('dotenv').config()

//mongodb Connection
const MongoClient = require('mongodb').MongoClient;
//add database connection
const uri = 'mongodb+srv://navin:test@cluster0.ognmqfv.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})

client.connect((err,db) => {
    if(!err) {
    console.log('MongoDB Connected')
    }
    else {
    console.log("DB Error: ", err);
    process.exit(1);
    }
     })
     module.exports = client;