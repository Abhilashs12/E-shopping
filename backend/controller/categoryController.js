import Category from "../models/Category.js";

const createCategory =async(req,res)=>{
    try{
        const category = await Category.create(req.body);
        res.status(200).json(category);

    }
    catch(error){
        res.status(500).json({
            message:error.message,
        });
    };
}

const getCategories = async(req,res)=>{
    try{
        const categories = await Category.find();
        res.status(200).json(categories);
    }
    catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

export {createCategory,getCategories}