//importing express
const express = require('express')
const foodModel = require("./model")
const cardModel = require("./mode")
const cors =require('cors')
// 2.initalization
const app =express()
// middelwere || passing the parameter
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());
//api creation
app.get('/abhilash',(req,res)=>{
    res.send("I am abhilash")
})
//  api for adding data
app.post('/add',async(req,res)=>{
    var result = await new foodModel(req.body)
    result.save()
    res.send("data added")

})
//api for login
app.post("/login",(req,res)=>{
    const{onumber,opass}=req.body;
    rest.findOne({onumber:onumber})
    .then(user =>{
        if(user){
            if(user.opass ===opass){
                res.json("success")
            }else{
                res.json("password is incorrect")
            }
        }else{
            res.json("no data existed")
        }
    })
})
// code to add data to card
app.post('/add1',async(req,res)=>{
    var data = await new cardModel(req.body)
    data.save()
    res.send("data added")
})


//to view the card deytails
app.get('/view',async(req,res)=>{
    let data = await cardModel.find()
    res.json(data)
    console.log("data")
})

// 4.port
app.listen(3006,()=>{
    console.log("port 3006 is up and running")
})