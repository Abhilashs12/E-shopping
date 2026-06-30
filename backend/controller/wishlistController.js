import Wishlist from "../models/Wishlist.js";

const addToWishlist = async (req, res) => {
  try {
    const { user, product } = req.body;

    const existingWishlist = await Wishlist.findOne({
      user,
      product,
    });

    if (existingWishlist) {
      return res.status(400).json({
        message: "Product already exists in wishlist",
      });
    }

    const wishlist = await Wishlist.create({
      user,
      product,
    });

    res.status(201).json(wishlist);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getWishlist = async (req, res) => {
  try {
    const { user } = req.query;

    const wishlist = await Wishlist.find({
      user,
    })
      .populate("product")
      .populate("user", "name email");

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export { addToWishlist, getWishlist };
