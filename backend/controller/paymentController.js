import Payment from "../models/Payment.js";

export const createPayment = async (req, res) => {
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
export { createPayment, getUserPayments };
