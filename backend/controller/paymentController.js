import Payment from "../models/Payment.js";

const createPayment = async (req, res) => {
  try {
    const { user, order, amount, paymentMethod } = req.body;

    const payment = await Payment.create({
      user,
      order,
      amount,
      paymentMethod,
    });

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getUserPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate("user").populate("order");

    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getSinglePayment = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id)
      .populate("user")
      .populate("order");

    if (!payment) {
      return res.status(404).json({
        message: "Payment Not Found",
      });
    }

    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export { createPayment, getUserPayments, getSinglePayment };
