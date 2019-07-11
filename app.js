var express = require('express')
var app = express();
var cookieparser = require('cookie-parser');
app.use(cookieparser())

function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
         return v.toString(16);
       });
      }
randomNumber = uuidv4();

 app.get('/setcookie',(req,res)=>{
     res.cookie('guna123',randomNumber,{httpOnly:true,expires:new Date(Date.now()+6.307e+10)});
    return res.send("coockie has set")

 });
app.get('/getcookie',(req,res)=>{
    res.send(req.cookies.guna123);
    console.log(req.cookies); 

 });
app.listen(8888, function(){
    console.log("port no 8800");

});