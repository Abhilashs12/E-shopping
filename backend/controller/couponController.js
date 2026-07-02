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
    const coupons = await Coupon.find();

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
        message: "Coupon Not Found",
      });
    }

    res.status(200).json(coupon);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateCoupon = async (req, res) => {
  try {
    const { code, discount, minOrderAmount, expiryDate, isActive } = req.body;

    const coupon = await Coupon.findByIdAndUpdate(
      req.params.id,
      {
        code: code.toUpperCase(),
        discount,
        minOrderAmount,
        expiryDate,
        isActive,
      },
      {
        new: true,
      },
    );

    if (!coupon) {
      return res.status(404).json({
        message: "Coupon Not Found",
      });
    }

    res.status(200).json(coupon);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndDelete(req.params.id);

    if (!coupon) {
      return res.status(404).json({
        message: "Coupon Not Found",
      });
    }

    res.status(200).json({
      message: "Coupon Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const applyCoupon = async (req, res) => {
  try {
    const { code, orderAmount } = req.body;

    const coupon = await Coupon.findOne({
      code: code.toUpperCase(),
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

    if (orderAmount < coupon.minOrderAmount) {
      return res.status(400).json({
        message: `Minimum order amount should be ₹${coupon.minOrderAmount}`,
      });
    }

    const discountAmount = (orderAmount * coupon.discount) / 100;

    const finalAmount = orderAmount - discountAmount;

    res.status(200).json({
      coupon: coupon.code,
      discountPercentage: coupon.discount,
      discountAmount,
      finalAmount,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export {
  createCoupon,
  getAllCoupons,
  getSingleCoupon,
  updateCoupon,
  deleteCoupon,
  applyCoupon,
};
