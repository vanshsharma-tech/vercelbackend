import express from "express"
const app = express()
app.get("/",(req,res)=>{
  res.send("Hellow world")
})
app.get("/login",(req,res)=>{
  res.send("User Login successfully")
})
app.listen(3000,(req,res)=>{
  console.log('app is listing on port '+3000)
})