import Wishlist from "../models/Wishlist.js";

const addToWishlist = async (req, res) => {
  try {
    const { user, product } = req.body;

    const existing = await Wishlist.findOne({
      user,
      product,
    });

    if (existing) {
      return res.status(400).json({
        message: "Product already in wishlist",
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

export { addToWishlist };
