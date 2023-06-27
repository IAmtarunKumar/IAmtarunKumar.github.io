const express = require("express")
const nodemailer =  require("nodemailer")
const cors = require("cors")


const app = express()
app.use(express.json())

app.use(cors())


app.post("/mail" , (req,res)=>{

let {email , name , massage} = req.body

    
var transporter = nodemailer.createTransport({
    service : "gmail",
      auth : {
          user : "tarunkumarmahto2000@gmail.com",
          pass : "wlghihttobcllmvj"
      }
  });
  
  var mailOptions = {
      from : email,
      to : "tarunkumarmahto2000@gmail.com",
      subject : name,
      text : massage
  }
  
  transporter.sendMail(mailOptions , function(error,info){
      if(error){
                
                 
                  console.log(error);
              }else{
                 
           
                  console.log("Email has been sent", express.response.info)
              }
  })

  res.send({msg : "Email is Sent"})
  
  
  

})


app.listen(3000 , ()=>{
    console.log("3000 port is working")
})