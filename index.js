let express = require('express');
require("dotenv").config();
// to upload import the checktoken and checkpasss
const { checktoken, checkpass } = require('./middlewar');
let app = express()
app.use(express.json());
//The below line is commented because we are routing middleware from the file middlewar.js
/*let mytoken = "123456"
let mypass = "abcd"
// Singel middlewar
let checktoken = (req,res,next)=>{
    if(req.query.token == ""|| req.query.token == undefined){
        return res.send(
            {
                msg: "Please Fill The Token"
            }
        )
    }
    if(req.query.token!=mytoken){
        return res.send(
            {
                msg : "Fill Token Correctly"
            }
        )
    }
    next()
}
// app.use down is used to build multiple middleware
app.use((req,res,next)=>{
    if(req.query.pass == ""|| req.query.pass == undefined){
        return res.send(
            {
                msg: "Please Fill The password"
            }
        )
    }
    if(req.query.pass!=mypass){
        return res.send(
            {
                msg : "Fill Password Correctly"
            }
        )
    }
    next()
})*/
//route level middle-ware
app.use(checkpass)//we can remove this line and can write app.get("/next",checktoken,checkpass,(req,res) also
// to use imported checktoken and checkpass we are writing checktoken in between the get parameter 
app.get("/next",checktoken,(req,res)=>{
    res.send({
        msg: "hello dost"
    })
})
app.use(checktoken)
app.listen(process.env.PORT)