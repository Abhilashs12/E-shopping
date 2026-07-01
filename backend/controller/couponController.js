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
const getAllCoupons = async (req, res) => {
  try {
    const coupon = await Coupon.find();
    res.status(200).json(coupons);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getSingleCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    if (!coupon) {
      return res.status(404).json({
        message: "Coupon Not found",
      });
    }
    res.status(200).json(coupon);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export { createCoupon, getAllCoupons, getSingleCoupon };
