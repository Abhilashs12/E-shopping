import { FaFire, FaTruck, FaUndoAlt, FaHeadset } from "react-icons/fa";

function TopBar() {
  return (
    <div className="bg-slate-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaFire className="text-orange-500" />
          <span>Summer Sale: Up to 50% OFF</span>
        </div>

        <div className="hidden md:flex gap-6">
          <div className="flex items-center gap-2">
            <FaTruck />
            <span>Free Shipping</span>
          </div>

          <div className="flex items-center gap-2">
            <FaUndoAlt />
            <span>Easy Returns</span>
          </div>

          <div className="flex items-center gap-2">
            <FaHeadset />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
