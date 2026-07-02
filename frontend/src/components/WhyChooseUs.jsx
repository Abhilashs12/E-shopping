import { FaTruck, FaLock, FaUndoAlt, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck />,
    title: "Free Shipping",
    description: "Free delivery on orders over ₹999.",
  },
  {
    icon: <FaLock />,
    title: "Secure Payment",
    description: "100% safe and secure payment gateway.",
  },
  {
    icon: <FaUndoAlt />,
    title: "Easy Returns",
    description: "7-day hassle-free return policy.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    description: "Our support team is always ready to help.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Why Choose ShopEase?</h2>

          <p className="text-gray-500 mt-4">
            We provide the best shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow hover:shadow-xl transition p-8 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="text-gray-500 mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
