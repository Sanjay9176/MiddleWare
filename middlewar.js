//Routing Middleware 
//let mytoken = "123456" i am commmenting this so i can env part so in this sensitive info like pass, token are called in env file which make it easier ans secured
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
    if(req.query.token!=process.env.MyToken){
        return res.send(
            {
                msg : "Fill Token Correctly"
            }
        )
    }
    next()
}
// app.use down is used to build multiple middleware
let checkpass = ((req,res,next)=>{
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
})
module.exports = {checktoken,checkpass}