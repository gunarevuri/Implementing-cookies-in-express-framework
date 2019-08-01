var express = require('express')
var app = express();
var cookieparser = require('cookie-parser'); //cookie-parser is a middleware which parses cookies attached to the client request object. 
app.use(cookieparser())

//uuidv4() function to generate random number uuid
function uuidv4() { 
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
         return v.toString(16);
       });
      }
randomNumber = uuidv4();

// set the cookie with randomNumber generated above and with expiry date of 2 years from current date
 app.get('/setcookie',(req,res)=>{
     res.cookie('guna123',randomNumber,{httpOnly:true,expires:new Date(Date.now()+6.307e+10)});
    return res.send("coockie has set")

 });

//get the cookie with name guna123
app.get('/getcookie',(req,res)=>{
    res.send(req.cookies.guna123);
    console.log(req.cookies); 

 });


app.listen(8888, function(){
    console.log("port no 8800");

});
