let projectmodel = require('../models/project');

/*
let client = express = require("../dbConnect");
let projectCollection;

setTimeout(() => {
    projectCollection = client.mongoclient.db().collection("projects");
},2000)

//install collection
const insertProjects = (profile,callback) => {
    projectCollection.insert(profile,callback);
}
// get project...
const getProjects = (callback) => {
        projectCollection.find({}).toArray(callback);
    }

    */

// create new project

const createProjects = (req,res) => {
    console.log("New Project added", req.body)
            var newProject = req.body;
            projectmodel.insertProjects(newProject,(err,result) => {
                if(err) {
                    res.json({statusCode: 400, message: err})
                }
                else {
                   res.json({statusCode: 200, message:"Project Successfully added", data: result})
                }
            })
}
// retrieve project

const retrieveProjects = (req, res) => {
    projectmodel.getProjects((err,result) => {
        if(err) {
        res.json({statusCode: 400, message: err})
        }
        else {
         res.json({statusCode: 200, message:"Success", data: result})
        }
        })
}

module.exports = {
    retrieveProjects, createProjects
    }
    

