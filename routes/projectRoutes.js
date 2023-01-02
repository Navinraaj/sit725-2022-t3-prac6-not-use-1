var express = require("express")
var router = express.Router();
//let client = express = require("../dbConnect");
//let projectCollection;
let controller = require("../controller");

/*
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

    router.post('/',(req,res) => {
        controller.projectController.createProjects(req, res)
        /*
            console.log("New Project added", req.body)
            var newProject = req.body;
            insertProjects(newProject,(err,result) => {
                if(err) {
                    res.json({statusCode: 400, message: err})
                }
                else {
                   res.json({statusCode: 200, message:"Project Successfully added", data: result})
                }
            })
        */
        })
    router.get('/',(req,res) => {
    controller.projectController.retrieveProjects(req, res)

     /*
    getProjects((err,result) => {
    if(err) {
    res.json({statusCode: 400, message: err})
    }
    else {
     res.json({statusCode: 200, message:"Success", data: result})
    }
    })
    */
    })
        module.exports = router;
            