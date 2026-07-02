import ProductCard from "./ProductCard";

const newProducts = [
  {
    id: 1,
    title: "Nike Air Max",
    category: "Shoes",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    price: 5499,
    oldPrice: 6999,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Apple Watch",
    category: "Electronics",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    price: 15999,
    oldPrice: 18999,
    rating: 4.9,
  },
  {
    id: 3,
    title: "Leather Bag",
    category: "Accessories",
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg",
    price: 2299,
    oldPrice: 2999,
    rating: 4.7,
  },
  {
    id: 4,
    title: "Wireless Earbuds",
    category: "Electronics",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    price: 3499,
    oldPrice: 4499,
    rating: 4.9,
  },
];

function NewArrivals() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-blue-600 font-semibold uppercase">
              Just Arrived
            </p>

            <h2 className="text-4xl font-bold mt-2">New Arrivals</h2>
          </div>

          <button className="text-blue-600 font-semibold hover:underline">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              category={product.category}
              image={product.image}
              price={product.price}
              oldPrice={product.oldPrice}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
