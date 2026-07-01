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
        <div className="hidden md:flex items-center w-1/2 border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 outline-none"
          />

          <button className="bg-blue-600 text-white px-4 py-3">
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
