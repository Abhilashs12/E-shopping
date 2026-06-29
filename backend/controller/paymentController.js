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
export {createPayment};