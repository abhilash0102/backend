const mongoose = require("mongoose")

mongoose.connect("mongodbyour path")
.then(()=>{
    console.log("db connected")
   
})
.catch(err=>console.log(err))

let mongoschema = mongoose.Schema

const FoodSchema = new mongoschema({
    oname:String,
    onumber:Number,
    omail:String,
    opass:String
})

var foodModel = mongoose.model("food",FoodSchema)
module.exports = foodModel
