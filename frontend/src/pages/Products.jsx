import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let temp = [...products];

    if (category !== "All") {
      temp = temp.filter((item) => item.category === category);
    }

    if (search) {
      temp = temp.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    setFilteredProducts(temp);
  }, [search, category, products]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h2 className="text-2xl font-bold">Loading Products...</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Our Products</h1>

          <p className="mt-4 text-lg">Browse our latest collection.</p>
        </div>
      </div>

      {/* Search & Filter */}

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-5 justify-between">
        <input
          type="text"
          placeholder="Search Products..."
          className="border rounded-xl px-5 py-3 md:w-96 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-xl px-5 py-3 outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Fashion</option>
          <option>Electronics</option>
          <option>Shoes</option>
          <option>Accessories</option>
        </select>
      </div>

      {/* Products */}

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {filteredProducts.length === 0 ? (
          <div className="text-center text-2xl font-semibold py-20">
            No Products Found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                _id={product._id}
                title={product.title}
                category={product.category}
                image={product.image}
                price={product.price}
                rating={product.rating}
                stock={product.stock}
                discount={product.discount}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
