// const mongoose=require("mongoose");
// import mongoose from 'mongoose';

const connectdb=require("./db/connect");
connectdb();
const Product=require("./models/Product");
const productJSON=require("./product.json")
const start=async()=>{
    try {
        
        await Product.deleteMany();
        await Product.create(productJSON);
        console.log("succcesss");
    } catch (error) {
        console.log(error);
    }
}

start();