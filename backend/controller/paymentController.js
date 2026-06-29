import Payment from "../models/Payment.js";

const createPayment = async (req, res) => {
  try {
    const { order, amount, paymentMethod } = req.body;
    const payment = await Payment.create({
      user: req.user.id,
      order,
      amount,
      payment,
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
    const payments = await Payment.find({
      user: req.user.id,
    }).populate("order");
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export { createPayment, getUserPayments };
