const Product= require('../models/products');

const createProducts = async(req,res)=>{
    try{
        const product=await Product.create(req.body);
        res.status(200).json(product);
      }
      catch(error)
      {
        res.status(500).json({message:error.message})
      }
}

const getProducts = async(req,res)=>{
    try{
        const product=await Product.find({});
        res.status(200).json(product);
      }
      catch(error)
      {
        res.status(500).json({message:error.message})
      }
}

const getProduct = async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findById(id);
        res.status(200).json(product);
      }
      catch(error)
      {
        res.status(500).json({message:error.message})
      }
    }

const updateProduct = async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);
        if (!product)
        {
          return res.status(404).json({message:"product not found"});
        }
    
        const upd = await Product.findById(id);
        res.status(200).json(upd);
      }
      catch(error)
      {
        res.status(500).json({message:error.message})
      }
}
const deleteProduct = async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id);
        if (!product)
        {
          return res.status(404).json({message:"product not found"});
        }
    
        res.status(200).json({message:"Product deleted successfully"});
      }
      catch(error)
      {
        res.status(500).json({message:error.message})
      }
}

module.exports={
    createProducts,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}

