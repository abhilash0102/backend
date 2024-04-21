const mongoose = require("mongoose")

mongoose.connect("mongodb your monggose")
.then(()=>{
    console.log("db connected")
   
})
.catch(err=>console.log(err))

let mongoschema = mongoose.Schema

const CardSchema = new mongoschema({
    title: String,
    price:Number ,
    image:String
})

var cardModel = mongoose.model("card",CardSchema)
module.exports = cardModel
