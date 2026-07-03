import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaShoppingBag,
  FaSearch,
  FaBars,
  FaTimes,
  FaUser,
  FaChevronDown,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

function Navbar() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const { cartItems } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8F5F2]/95 backdrop-blur-lg border-b border-[#E6DDD4]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="text-3xl font-extrabold tracking-wide text-[#5C4033]"
          >
            ShopEase
          </Link>

          {/* Search */}

          <div className="hidden lg:flex flex-1 mx-12">

            <div className="w-full flex rounded-full overflow-hidden shadow bg-white">

              <input
                type="text"
                placeholder="Search luxury products..."
                className="flex-1 px-6 py-4 outline-none"
              />

              <button className="bg-[#5C4033] hover:bg-[#7B5E57] text-white px-8 transition">
                <FaSearch />
              </button>

            </div>

          </div>

          {/* Desktop */}

          <div className="hidden md:flex items-center gap-8">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#5C4033] font-semibold"
                  : "hover:text-[#C49A6C]"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-[#5C4033] font-semibold"
                  : "hover:text-[#C49A6C]"
              }
            >
              Products
            </NavLink>

            {/* Cart */}

            <Link
              to="/cart"
              className="relative text-2xl text-[#5C4033] hover:text-[#C49A6C]"
            >
              <FaShoppingBag />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C49A6C] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* User */}

            {!user ? (
              <Link
                to="/login"
                className="text-2xl text-[#5C4033] hover:text-[#C49A6C]"
              >
                <FaUser />
              </Link>
            ) : (
              <div className="relative">

                <button
                  onClick={() =>
                    setDropdownOpen(!dropdownOpen)
                  }
                  className="flex items-center gap-2 text-[#5C4033]"
                >
                  <FaUser />

                  <span>
                    Hi, {user.name}
                  </span>

                  <FaChevronDown size={12} />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-4 w-52 bg-white rounded-xl shadow-xl border">

                    <Link
                      to="/profile"
                      className="block px-5 py-3 hover:bg-gray-100"
                    >
                      My Profile
                    </Link>

                    <Link
                      to="/orders"
                      className="block px-5 py-3 hover:bg-gray-100"
                    >
                      My Orders
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-5 py-3 text-red-500 hover:bg-red-50"
                    >
                      Logout
                    </button>

                  </div>
                )}

              </div>
            )}

          </div>

          {/* Mobile */}

          <button
            className="md:hidden text-2xl text-[#5C4033]"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (

          <div className="md:hidden py-5 border-t">

            <div className="space-y-4">

              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className="block"
              >
                Home
              </NavLink>

              <NavLink
                to="/products"
                onClick={() => setMenuOpen(false)}
                className="block"
              >
                Products
              </NavLink>

              <NavLink
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="block"
              >
                Cart ({totalItems})
              </NavLink>

              {!user ? (
                <NavLink
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block"
                >
                  Login
                </NavLink>
              ) : (
                <button
                  onClick={handleLogout}
                  className="text-red-500"
                >
                  Logout
                </button>
              )}

            </div>

          </div>

        )}

      </div>

    </header>
  );
}

export default Navbar;