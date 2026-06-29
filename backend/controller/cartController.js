import Cart from "../models/Cart.js";

const addToCart = async (req, res) => {

    try {

        const { product, quantity } = req.body;

        const cartItem = await Cart.create({
            user: req.user.id,
            product: product,
            quantity: quantity,
        });

        res.status(201).json(cartItem);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};

const getCartItems = async (req, res) => {

    try {

        const cartItems = await Cart.find({
            user: req.user.id,
        }).populate("product");

        res.status(200).json(cartItems);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};
const removeCartItem = async (req, res) => {

    try {

        await Cart.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Cart Item Removed",
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};
export { addToCart, getCartItems, removeCartItem }