import Order from "../models/Order.js";
import Coupon from "../models/Coupon.js";
import Product from "../models/Product.js";

const createOrder = async (req, res) => {
  try {
    const { user, orderItems, shippingAddress, totalPrice, couponCode } =
      req.body;

    let discount = 0;
    let finalAmount = totalPrice;
    let appliedCoupon = "";

    if (couponCode) {
      const coupon = await Coupon.findOne({
        code: couponCode.toUpperCase(),
      });

      if (!coupon) {
        return res.status(404).json({
          message: "Invalid Coupon",
        });
      }

      if (!coupon.isActive) {
        return res.status(400).json({
          message: "Coupon is inactive",
        });
      }

      if (coupon.expiryDate < new Date()) {
        return res.status(400).json({
          message: "Coupon has expired",
        });
      }

      if (totalPrice < coupon.minOrderAmount) {
        return res.status(400).json({
          message: `Minimum order amount should be ₹${coupon.minOrderAmount}`,
        });
      }

      discount = (totalPrice * coupon.discount) / 100;
      finalAmount = totalPrice - discount;
      appliedCoupon = coupon.code;
    }
    for (const item of orderItems) {
      const product = await Product.findById(item.product);

      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          message: `${product.title} has only ${product.stock} items in stock`,
        });
      }
    }
    const order = await Order.create({
      user,
      orderItems,
      shippingAddress,
      totalPrice,
      coupon: appliedCoupon,
      discount,
      finalAmount,
    });
    for (const item of orderItems) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: {
          stock: -item.quantity,
        },
      });
    }

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
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    if (req.body.status === "Cancelled" && order.status !== "Cancelled") {
      for (const item of order.orderItems) {
        await Product.findByIdAndUpdate(item.product, {
          $inc: {
            stock: item.quantity,
          },
        });
      }
    }

    order.status = req.body.status;

    const updatedOrder = await order.save();

    res.status(200).json(updatedOrder);
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
export { createOrder, getUserOrders, updateOrderStatus, getAllOrders };
