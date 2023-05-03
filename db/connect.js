const mongoose=require("mongoose");

const mongoUri="mongodb://localhost:27017";

const connectdb=async()=>{
    try {
        await mongoose.connect(mongoUri);
        console.log("Connected to db")
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectdb;