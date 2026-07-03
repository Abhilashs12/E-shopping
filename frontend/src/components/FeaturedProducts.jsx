import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Premium Sneakers",
    category: "Shoes",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    price: 3999,
    oldPrice: 4999,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Smart Watch",
    category: "Electronics",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    price: 6999,
    oldPrice: 8999,
    rating: 4.9,
  },
  {
    id: 3,
    title: "Leather Jacket",
    category: "Fashion",
    image: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg",
    price: 2499,
    oldPrice: 3499,
    rating: 4.7,
  },
  {
    id: 4,
    title: "Wireless Headphones",
    category: "Electronics",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    price: 4999,
    oldPrice: 5999,
    rating: 4.9,
  },
  {
    id: 5,
    title: "Travel Backpack",
    category: "Accessories",
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg",
    price: 1999,
    oldPrice: 2599,
    rating: 4.6,
  },
  {
    id: 6,
    title: "Gaming Keyboard",
    category: "Electronics",
    image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
    price: 2999,
    oldPrice: 3999,
    rating: 4.8,
  },
  {
    id: 7,
    title: "Casual T-Shirt",
    category: "Fashion",
    image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    price: 899,
    oldPrice: 1299,
    rating: 4.5,
  },
  {
    id: 8,
    title: "Modern Sunglasses",
    category: "Accessories",
    image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
    price: 1499,
    oldPrice: 1999,
    rating: 4.7,
  },
];

function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold">Featured Products</h2>

            <p className="text-gray-500 mt-2">
              Discover our most popular products.
            </p>
          </div>

          <button className="text-blue-600 font-semibold hover:underline">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
           <ProductCard
    key={product.id}
    _id={product.id}
    title={product.title}
    category={product.category}
    image={product.image}
    price={product.price}
    rating={product.rating}
    stock={20}
    discount={20}
/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
