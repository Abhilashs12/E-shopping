import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#F8F5F2] via-[#F2ECE5] to-[#E6DDD4]">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>

            <p className="uppercase tracking-[4px] text-[#C49A6C] font-semibold">
              New Collection 2026
            </p>

            <h1 className="mt-5 text-5xl lg:text-7xl font-extrabold leading-tight text-[#2B2B2B]">
              Timeless <br />

              Fashion for <br />

              Every Style
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-lg">

              Discover premium fashion, accessories, and lifestyle
              products designed with elegance and comfort in mind.

            </p>

            <div className="flex gap-5 mt-10">

              <Link
                to="/products"
                className="bg-[#5C4033] hover:bg-[#7B5E57] text-white px-8 py-4 rounded-full shadow-lg transition"
              >
                Shop Now
              </Link>

              <Link
                to="/products"
                className="border-2 border-[#5C4033] text-[#5C4033] hover:bg-[#5C4033] hover:text-white px-8 py-4 rounded-full transition"
              >
                Explore
              </Link>

            </div>

          </div>

          {/* Right Image */}

          <div className="relative">

            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-[#C49A6C]/20 blur-3xl"></div>

            <div className="absolute -bottom-10 -right-6 w-56 h-56 rounded-full bg-[#5C4033]/10 blur-3xl"></div>

            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900"
              alt="Fashion"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[600px]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;