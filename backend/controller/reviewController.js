import Review from "../models/Review.js";

const addReview = async (req, res) => {
  try {
    const { user, product, rating, comment } = req.body;

    const existingReview = await Review.findOne({
      user,
      product,
    });

    if (existingReview) {
      return res.status(400).json({
        message: "You have already reviewed this product",
      });
    }

    const review = await Review.create({
      user,
      product,
      rating,
      comment,
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getProductReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      product: req.params.productId,
    })
      .populate("user", "name email")
      .populate("product", "title price");

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      {
        rating,
        comment,
      },
      {
        new: true,
      },
    );
    if (!review) {
      return res.status(404).json({
        message: "Review not found",
      });
    }
    res.status(200).json(review);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export { addReview, getProductReviews, updateReview };
