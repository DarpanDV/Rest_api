const mongoose=require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  price:
  {
    type:Number,
    required:true
  },
  feature:{
    type:Boolean,
    default:true
  },
  created_at:
  {
    type:Date,
    default:Date.now()
  },
  rating:{
    type:Number,
    default:4
  },
  company:
  {
    type:String,
    required:true
  }

});

module.exports= mongoose.model('Product', productSchema);

