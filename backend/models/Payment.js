import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    amount: {
      ref: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["Card", "UPI", "Net Banking", "Cash On Delivery"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Success", "Failed", "Refunded"],
      default: "Pending",
    },

    transactionId: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
