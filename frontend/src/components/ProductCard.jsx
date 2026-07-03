import {
  FaHeart,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({
  _id,
  title,
  category,
  image,
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
    addToCart({
      _id,
      title,
      image,
      price,
      rating,
      stock,
      category,
      discount,
    });
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500">

      {/* Image */}

      <div className="relative overflow-hidden bg-[#F8F5F2]">

        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
        />

        {discount > 0 && (
          <span className="absolute top-4 left-4 bg-[#5C4033] text-white text-sm px-3 py-1 rounded-full">
            {discount}% OFF
          </span>
        )}

        <button className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full shadow hover:bg-[#5C4033] hover:text-white transition">

          <FaHeart className="mx-auto mt-3" />

        </button>

      </div>

      {/* Content */}

      <div className="p-6">

        <p className="text-[#C49A6C] font-medium text-sm uppercase">

          {category}

        </p>

        <h2 className="mt-2 text-xl font-bold text-[#2B2B2B] line-clamp-1">

          {title}

        </h2>

        <div className="flex items-center gap-2 mt-3">

          <FaStar className="text-yellow-500" />

          <span>{rating}</span>

        </div>

        <div className="flex items-center gap-3 mt-4">

          <span className="text-2xl font-bold text-[#5C4033]">

            ₹{price}

          </span>

          {discount > 0 && (

            <span className="line-through text-gray-400">

              ₹{originalPrice}

            </span>

          )}

        </div>

        <p className="mt-4">

          {stock > 0 ? (

            <span className="text-green-600">

              In Stock ({stock})

            </span>

          ) : (

            <span className="text-red-500">

              Out of Stock

            </span>

          )}

        </p>

        <div className="flex gap-3 mt-6">

          <Link
            to={`/products/${_id}`}
            className="flex-1 border border-[#5C4033] text-[#5C4033] text-center py-3 rounded-xl hover:bg-[#5C4033] hover:text-white transition"
          >
            View
          </Link>

          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#5C4033] hover:bg-[#7B5E57] text-white rounded-xl py-3 flex items-center justify-center gap-2 transition"
          >
            <FaShoppingBag />

            Add
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;