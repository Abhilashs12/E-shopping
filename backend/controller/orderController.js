import Order from "../models/Order.js";
import Coupon from "../models/Coupon.js";
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

    const order = await Order.create({
      user,
      orderItems,
      shippingAddress,
      totalPrice,
      coupon: appliedCoupon,
      discount,
      finalAmount,
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
      },
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
export { createOrder, getUserOrders, updateOrderStatus, getAllOrders };
