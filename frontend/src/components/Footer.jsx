import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}

        <div>
          <h2 className="text-3xl font-bold text-white">ShopEase</h2>

          <p className="mt-5 leading-7">
            ShopEase is your trusted destination for fashion, electronics,
            accessories and premium lifestyle products.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 transition flex items-center justify-center"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-500 transition flex items-center justify-center"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-700 transition flex items-center justify-center"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Quick Links</h3>

          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-white">
                Products
              </Link>
            </li>

            <li>
              <Link to="/cart" className="hover:text-white">
                Cart
              </Link>
            </li>

            <li>
              <Link to="/login" className="hover:text-white">
                Login
              </Link>
            </li>

            <li>
              <Link to="/register" className="hover:text-white">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}

        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Customer Service
          </h3>

          <ul className="space-y-3">
            <li>Help Center</li>

            <li>Shipping Policy</li>

            <li>Return Policy</li>

            <li>Privacy Policy</li>

            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Contact</h3>

          <div className="space-y-5">
            <div className="flex gap-3">
              <FaMapMarkerAlt className="text-blue-400 mt-1" />

              <span>Bangalore, Karnataka, India</span>
            </div>

            <div className="flex gap-3">
              <FaPhoneAlt className="text-blue-400 mt-1" />

              <span>+91 9876543210</span>
            </div>

            <div className="flex gap-3">
              <FaEnvelope className="text-blue-400 mt-1" />

              <span>support@shopease.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-400">
          © 2026 ShopEase. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
