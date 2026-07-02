import { Link } from "react-router-dom";

function OfferBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white overflow-hidden">
        <div className="grid md:grid-cols-2 items-center">
          {/* Left */}
          <div className="p-12">
            <p className="uppercase tracking-widest text-sm">
              Limited Time Offer
            </p>

            <h2 className="text-5xl font-bold mt-4">Up to 70% OFF</h2>

            <p className="mt-5 text-lg text-blue-100">
              Discover thousands of premium products with exclusive discounts.
            </p>

            <Link
              to="/products"
              className="inline-block mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Shop Now →
            </Link>
          </div>

          {/* Right */}
          <div className="h-full">
            <img
              src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
              alt="Offer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferBanner;