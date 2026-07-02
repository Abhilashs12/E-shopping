/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { getProductById } from "../services/productService";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return (
      <div className="h-screen flex justify-center items-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  const originalPrice = product.discount
    ? Math.round(product.price / (1 - product.discount / 100))
    : product.price;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Image */}

        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-3xl shadow-xl"
          />
        </div>

        {/* Details */}

        <div>
          <p className="text-blue-600 font-medium">{product.category}</p>

          <h1 className="text-5xl font-bold mt-3">{product.title}</h1>

          <div className="flex items-center gap-2 mt-5">
            <FaStar className="text-yellow-400" />

            <span>{product.rating}</span>
          </div>

          <div className="flex gap-4 items-center mt-6">
            <h2 className="text-4xl font-bold text-blue-600">
              ₹{product.price}
            </h2>

            {product.discount > 0 && (
              <span className="line-through text-gray-400 text-xl">
                ₹{originalPrice}
              </span>
            )}
          </div>

          {product.discount > 0 && (
            <span className="inline-block mt-4 bg-red-500 text-white px-4 py-2 rounded-full">
              {product.discount}% OFF
            </span>
          )}

          <p className="mt-8 text-gray-600 leading-8">{product.description}</p>

          <p className="mt-6 font-semibold">
            Stock :<span className="text-green-600 ml-2">{product.stock}</span>
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl flex items-center gap-3">
              <FaShoppingCart />
              Add to Cart
            </button>

            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition px-8 py-4 rounded-xl">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
