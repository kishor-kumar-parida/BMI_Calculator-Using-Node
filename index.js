const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


//BMI
app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmi.html");
    
});

app.post("/bmi", function(req, res){
    var num1 = parseFloat(req.body.weight);
    var num2 = parseFloat(req.body.height);
    var result = num1 / (num2*num2);
    res.send("Your BMI is: " + result);

});

app.listen(process.env.PORT || 3000, function(){
console.log("server is running on port 3000");
});
