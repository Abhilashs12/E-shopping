import Coupon from "../models/Coupon.js";

const createCoupon = async (req, res) => {
  try {
    const { code, discount, minOrderAmount, expiryDate, isActive } = req.body;

    const existingCoupon = await Coupon.findOne({
      code: code.toUpperCase(),
    });

    if (existingCoupon) {
      return res.status(400).json({
        message: "Coupon already exists",
      });
    }

    const coupon = await Coupon.create({
      code: code.toUpperCase(),
      discount,
      minOrderAmount,
      expiryDate,
      isActive,
    });

    res.status(201).json(coupon);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export { createCoupon };
