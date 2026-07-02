import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-blue-600">
          ShopEase
        </Link>

        {/* Search Bar */}
        {/* Search */}
        <div className="hidden lg:flex w-[520px] h-12 rounded-xl overflow-hidden border border-gray-300">
          <select className="bg-gray-100 px-4 outline-none border-r text-sm">
            <option>All Categories</option>
            <option>Fashion</option>
            <option>Electronics</option>
            <option>Shoes</option>
            <option>Accessories</option>
          </select>

          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 px-4 outline-none"
          />

          <button className="bg-blue-600 text-white w-14 hover:bg-blue-700 transition">
            <FaSearch />
          </button>
        </div>
        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-blue-600 font-medium">
            Home
          </Link>

          <Link to="/products" className="hover:text-blue-600 font-medium">
            Products
          </Link>

          <Link to="/cart" className="text-2xl hover:text-blue-600">
            <FaShoppingCart />
          </Link>

          <Link to="/login" className="text-2xl hover:text-blue-600">
            <FaUser />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
