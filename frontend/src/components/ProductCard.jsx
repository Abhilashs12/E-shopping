function ProductCard({ image, name, price, rating }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      {/* Product Image */}
      <img src={image} alt={name} className="w-full h-56 object-cover" />

      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>

        <p className="text-yellow-500 mt-2">⭐ {rating}</p>

        <p className="text-2xl font-bold text-blue-600 mt-2">₹{price}</p>

        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
