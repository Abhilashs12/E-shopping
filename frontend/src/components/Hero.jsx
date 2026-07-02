import { Link } from "react-router-dom";
import hero from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-300 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Left Side */}
        <div className="flex-1 z-10">
          <span className="inline-block bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-medium">
            🔥 New Collection 2026
          </span>

          <h1 className="text-6xl font-extrabold leading-tight mt-8 text-gray-900">
            Shop Smart,
            <br />
            <span className="text-blue-600">Live Better.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-lg">
            Discover premium fashion, electronics, accessories, beauty products
            and much more at unbeatable prices.
          </p>

          {/* Buttons */}

          <div className="flex gap-5 mt-10">
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl shadow-xl font-semibold"
            >
              Shop Now →
            </Link>

            <Link
              to="/products"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition px-8 py-4 rounded-xl font-semibold"
            >
              Explore Collection
            </Link>
          </div>

          {/* Statistics */}

          <div className="flex gap-12 mt-14">
            <div>
              <h2 className="text-3xl font-bold">10K+</h2>

              <p className="text-gray-500">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">500+</h2>

              <p className="text-gray-500">Premium Brands</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">24/7</h2>

              <p className="text-gray-500">Customer Support</p>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="flex-1 relative">
          <img
            src={hero}
            alt="Shopping"
            className="rounded-3xl shadow-2xl w-full h-[550px] object-cover"
          />

          {/* Floating Card */}

          <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl px-8 py-5">
            <p className="text-sm text-gray-500">Limited Offer</p>

            <h2 className="text-3xl font-bold text-red-500">50% OFF</h2>

            <p className="text-gray-600">On Selected Products</p>
          </div>

          {/* Floating Badge */}

          <div className="absolute top-8 right-8 bg-yellow-400 rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl">
            <span className="text-3xl font-bold">70%</span>

            <span className="text-sm font-semibold">SALE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
