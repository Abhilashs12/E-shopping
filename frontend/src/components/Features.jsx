import {
  FaTruck,
  FaUndoAlt,
  FaLock,
  FaHeadset,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaTruck />,
      title: "Free Shipping",
      subtitle: "On all orders over ₹999",
    },
    {
      icon: <FaUndoAlt />,
      title: "Easy Returns",
      subtitle: "30 days return policy",
    },
    {
      icon: <FaLock />,
      title: "Secure Payment",
      subtitle: "100% secure checkout",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      subtitle: "We're always here to help",
    },
  ];

  return (
    <section className="bg-[#F8F5F2] py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-5"
            >

              <div className="w-14 h-14 rounded-full bg-[#F3ECE5] flex items-center justify-center text-2xl text-[#5C4033]">

                {item.icon}

              </div>

              <div>

                <h3 className="font-semibold text-[#2B2B2B]">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.subtitle}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;