const mongoose=require('mongoose');
require("dotenv").config({path:'../.env'})
const connectDB= async()=>{
    try {
        await 
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.MONGO_URI)
        console.log("connect on database")
    } catch (error) {
        console.log(error)
    }

}
module.exports=connectDB;