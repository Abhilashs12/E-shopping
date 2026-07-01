import { Link } from "react-router-dom";
import hero from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            New Collection 2026
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight text-gray-900">
            Shop Smart,
            <br />
            Live Better.
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Discover the latest fashion, electronics, shoes, accessories and
            more at the best prices.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/products"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Shop Now
            </Link>

            <Link
              to="/products"
              className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Explore
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={hero}
            alt="Hero"
            className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
