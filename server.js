var express = require('express'); 
var bodyParser = require('body-parser'); 
var cors = require('cors'); 

var app = express(); 

//Middleware
app.use(cors()); 
app.use(bodyParser().JSON); 


//Authentication 


//Database Connection 
// mongoose.connect('mongodb://localhost/wolverinePack');

//Server Port 
var port = 8080
app.listen(process.env.EXPRESS_PORT || port, function(){
	console.log("Wolverine Pack is hunting on port ", port)
});
