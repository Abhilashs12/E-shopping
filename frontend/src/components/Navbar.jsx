import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate("/");
  };

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

          {/* Search */}
          <div className="hidden lg:flex flex-1 mx-12">
            <div className="w-full flex items-center bg-gray-100 rounded-full overflow-hidden">

              <FaSearch className="ml-5 text-gray-500" />

              <input
                type="text"
                placeholder="Search for products..."
                className="flex-1 bg-transparent px-4 py-4 outline-none"
              />

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                Search
              </button>

            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }
            >
              Products
            </NavLink>

            <Link
              to="/cart"
              className="relative text-2xl hover:text-blue-600"
            >
              <FaShoppingCart />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>

            </Link>

            {/* User Section */}
            {!user ? (
              <Link
                to="/login"
                className="text-2xl hover:text-blue-600"
              >
                <FaUser />
              </Link>
            ) : (
              <div className="relative">

                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 font-medium hover:text-blue-600"
                >
                  <FaUser />
                  Hi, {user.name}
                  <FaChevronDown className="text-sm" />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-xl border">

                    <Link
                      to="/profile"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-5 py-3 hover:bg-gray-100"
                    >
                      My Profile
                    </Link>

                    <Link
                      to="/orders"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-5 py-3 hover:bg-gray-100"
                    >
                      My Orders
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-5 py-3 hover:bg-red-50 text-red-600"
                    >
                      Logout
                    </button>

                  </div>
                )}

              </div>
            )}

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t py-5">

            <div className="flex items-center bg-gray-100 rounded-full overflow-hidden mb-6">
              <FaSearch className="ml-4 text-gray-500" />

              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent px-4 py-3 outline-none"
              />
            </div>

            <div className="flex flex-col gap-4">

              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>

              <NavLink to="/products" onClick={() => setMenuOpen(false)}>
                Products
              </NavLink>

              <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
                Cart
              </NavLink>

              {!user ? (
                <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </NavLink>
              ) : (
                <>
                  <NavLink to="/profile" onClick={() => setMenuOpen(false)}>
                    My Profile
                  </NavLink>

                  <NavLink to="/orders" onClick={() => setMenuOpen(false)}>
                    My Orders
                  </NavLink>

                  <button
                    onClick={handleLogout}
                    className="text-left text-red-600"
                  >
                    Logout
                  </button>
                </>
              )}

            </div>

          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;