let client = express = require("../dbConnect");
let projectCollection;
const {MongoClient} = require('mongodb');


setTimeout(() => {
    projectCollection = client.db().collection("Projects");
},2000)

//install collection
const insertProjects = (profile,callback) => {
    projectCollection.insert(profile,callback);
}
// get project...
const getProjects = (callback) => {
        projectCollection.find({}).toArray(callback);
    }

    module.exports = {
        insertProjects, getProjects
        }
        