import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Row */}

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            to="/"
            className="text-3xl font-extrabold text-blue-600 tracking-wide"
          >
            ShopEase
          </Link>

          {/* Desktop Search */}

          <div className="hidden lg:flex flex-1 mx-12">

            <div className="w-full flex items-center bg-gray-100 rounded-full overflow-hidden">

              <FaSearch className="ml-5 text-gray-500" />

              <input
                type="text"
                placeholder="Search for products..."
                className="flex-1 bg-transparent px-4 py-4 outline-none"
              />

              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 font-medium">
                Search
              </button>

            </div>

          </div>

          {/* Right Icons */}

          <div className="hidden md:flex items-center gap-6">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600 transition"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600 transition"
              }
            >
              Products
            </NavLink>

            <Link
              to="/cart"
              className="relative hover:text-blue-600 transition text-2xl"
            >
              <FaShoppingCart />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>

            </Link>

            <Link
              to="/login"
              className="hover:text-blue-600 transition text-2xl"
            >
              <FaUser />
            </Link>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
                {/* Mobile Menu */}

        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 py-5">

            {/* Mobile Search */}

            <div className="flex items-center bg-gray-100 rounded-full overflow-hidden mb-6">

              <FaSearch className="ml-4 text-gray-500" />

              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 bg-transparent px-4 py-3 outline-none"
              />

            </div>

            <div className="flex flex-col gap-5">

              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 font-medium"
              >
                Home
              </NavLink>

              <NavLink
                to="/products"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 font-medium"
              >
                Products
              </NavLink>

              <NavLink
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 font-medium"
              >
                Cart
              </NavLink>

              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 font-medium"
              >
                Login
              </NavLink>

            </div>

          </div>
        )}

      </div>

    </header>
  );
}

export default Navbar;