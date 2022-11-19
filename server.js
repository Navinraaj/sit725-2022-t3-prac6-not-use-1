var express = require("express");
var app = express()

app.use(express.static(__dirname+'/public'))

app.use(express.json());
app.use(express.urlencoded({extends: false}));

const addNumbers = (number1, number2) => {
    var numb1 = parseInt(number1)
    var numb2 = parseInt(number2)
    var result = numb1 + numb2;
    return result;
}

app.get('/addTwoNumbers', (req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = addNumbers(number1,number2);
    res.json({statuscode: 200,data: result,message: 'success'})

})
var port = process.env.port || 3000;
app.listen(port,()=>{
        console.log("App listening to: http://localhost:"+port)
})