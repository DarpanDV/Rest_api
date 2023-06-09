const Product=require("../models/Product");

const getAllProducts=async(req,res)=>{
    const {company,name}=req.query;
    const queryObject={};

    if(company)
    {
        queryObject.company={$regex:company,$options:"i"};;
    }
    if(name)
    {
        queryObject.name={$regex:name,$options:"i"};
    }
    const mydata=await Product.find(queryObject);
    res.status(200).json(mydata);
}

const getAllProductsTesting=async(req,res)=>{
    const mydata=await Product.find(req.query);
    res.status(200).json(mydata);
}

module.exports={getAllProducts,getAllProductsTesting};