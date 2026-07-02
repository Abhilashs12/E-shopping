import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({
  _id,
  title,
  category,
  price,
  rating,
  stock,
  discount,
}) {
  const { addToCart } = useCart();

  const originalPrice = discount
    ? Math.round(price / (1 - discount / 100))
    : price;

  const handleAddToCart = () => {
  console.log("ID:", _id);
  console.log("TITLE:", title);

  addToCart({
    _id,
    title,
    category,
    price,
    rating,
    stock,
    discount,
  });
};

  

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">

      {/* Product Image */}
      <div className="relative overflow-hidden">
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-lg font-medium">
            Product Image
          </span>
        </div>

        {discount > 0 && (
          <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {discount}% OFF
          </span>
        )}

        <button className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-red-500 hover:text-white transition">
          <FaHeart />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-5">

        <p className="text-blue-600 text-sm font-medium">
          {category}
        </p>

        <h2 className="text-xl font-bold mt-2 line-clamp-1">
          {title}
        </h2>

        <div className="flex items-center gap-2 mt-3">
          <FaStar className="text-yellow-400" />
          <span className="font-medium">{rating}</span>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold text-blue-600">
            ₹{price}
          </span>

          {discount > 0 && (
            <span className="line-through text-gray-400">
              ₹{originalPrice}
            </span>
          )}
        </div>

        <p className="mt-3 text-sm">
          {stock > 0 ? (
            <span className="text-green-600 font-medium">
              In Stock ({stock})
            </span>
          ) : (
            <span className="text-red-500 font-medium">
              Out of Stock
            </span>
          )}
        </p>

        <div className="flex gap-3 mt-6">

          <Link
            to={`/products/${_id}`}
            className="flex-1 text-center border border-blue-600 text-blue-600 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition"
          >
            View
          </Link>

          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition"
          >
            <FaShoppingCart />
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;