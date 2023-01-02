let client = express = require("../dbConnect");
let projectCollection;
const {MongoClient} = require('mongodb');

setTimeout(() => {
    projectCollection = client.db().collection("Homeless People");
},2000)

//install collection
const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
}
// get project...
const getProjects = (callback) => {
        projectCollection.find({}).toArray(callback);
    }

    module.exports = {
        insertProjects, getProjects
        }
        