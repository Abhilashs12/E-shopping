import User from "../models/User.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";
import Category from "../models/Category.js";

const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalProducts = await Product.countDocuments();

    const totalCategories = await Category.countDocuments();

    const totalOrders = await Order.countDocuments();

    const revenue = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$finalAmount",
          },
        },
      },
    ]);

    const pendingOrders = await Order.countDocuments({
      status: "Processing",
    });

    const completedOrders = await Order.countDocuments({
      status: "Delivered",
    });

    const cancelledOrders = await Order.countDocuments({
      status: "Cancelled",
    });

    res.status(200).json({
      totalUsers,
      totalProducts,
      totalCategories,
      totalOrders,
      totalRevenue: revenue.length ? revenue[0].totalRevenue : 0,
      pendingOrders,
      completedOrders,
      cancelledOrders,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export { getDashboardStats };
