import Order from "../models/Order.js";

const createOrder = async (req, res) => {

    try {

        const { orderItems, totalPrice } = req.body;

        const order = await Order.create({
            user: req.user.id,
            orderItems,
            totalPrice,
        });

        res.status(201).json(order);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};
 const getUserOrders = async (req, res) => {

    try {

        const orders = await Order.find({
            user: req.user.id,
        }).populate("orderItems.product");

        res.status(200).json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};
const updateOrderStatus = async (req, res) => {
    try {

        const order = await Order.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status,
            },
            {
                new: true,
            }
        );

        res.status(200).json(order);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};
const getAllOrders = async (req, res) => {

    try {

        const orders = await Order.find()
            .populate("user", "name email")
            .populate("orderItems.product");

        res.status(200).json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};
export {createOrder,getUserOrders,updateOrderStatus,getAllOrders};