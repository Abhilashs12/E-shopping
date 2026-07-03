import { Link } from "react-router-dom";
import {
  FaTshirt,
  FaLaptop,
  FaShoePrints,
  FaGem,
} from "react-icons/fa";

const categories = [
  {
    name: "Fashion",
    icon: <FaTshirt />,
    color: "bg-[#F3EDE7]",
  },
  {
    name: "Electronics",
    icon: <FaLaptop />,
    color: "bg-[#EFE7DD]",
  },
  {
    name: "Shoes",
    icon: <FaShoePrints />,
    color: "bg-[#F6F2ED]",
  },
  {
    name: "Accessories",
    icon: <FaGem />,
    color: "bg-[#EEE5DB]",
  },
];

function Categories() {
  return (
    <section className="py-20 bg-[#F8F5F2]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#C49A6C] font-semibold">
            Categories
          </p>

          <h2 className="text-5xl font-bold text-[#2B2B2B] mt-4">
            Shop By Category
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Browse our carefully curated collections to find products
            that perfectly match your lifestyle.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {categories.map((category) => (

            <Link
              key={category.name}
              to="/products"
              className="group"
            >

              <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-500 p-8 text-center">

                <div
                  className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-4xl text-[#5C4033] ${category.color} group-hover:scale-110 transition duration-500`}
                >
                  {category.icon}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#2B2B2B]">
                  {category.name}
                </h3>

                <p className="mt-3 text-sm text-gray-500">
                  Explore Collection
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;