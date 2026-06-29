import Product from "../models/Product.js";

 const createProduct = async (req, res) => {

    try {

        const product = await Product.create(req.body);

        res.status(201).json(product);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};
 const getProducts = async (req, res) => {

    try {

        const products = await Product.find();

        res.status(200).json(products);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};
const getSingleProduct = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id);

        res.status(200).json(product);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};
const deleteProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Product Deleted",
            product,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};
const updateProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );

        res.status(200).json(product);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};
const getProductByCategory = async (req, res) => {

    try {
        const product = await Product.find({
            category:req.params.category,
        });
        res.status(200).json(product);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};
const searchProducts = async (req, res) => {

    try {

        const keyword = req.query.keyword || "";

        const products = await Product.find({
            title: {
                $regex: keyword,
                $options: "i",
            },
        });

        res.status(200).json(products);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};
export {
    createProduct,
    getProducts,
    getSingleProduct,
    deleteProduct,
    updateProduct,
    getProductByCategory,
    searchProducts,
}