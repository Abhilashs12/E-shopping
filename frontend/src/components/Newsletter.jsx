import { FaPaperPlane } from "react-icons/fa";

function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-white">
          Subscribe to Our Newsletter
        </h2>

        <p className="text-blue-100 mt-4 text-lg">
          Get the latest products, offers, and exclusive discounts directly in
          your inbox.
        </p>

        <div className="mt-10 flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-xl">
          <input
            type="email"
            placeholder="Enter your email..."
            className="flex-1 px-6 py-5 outline-none text-gray-700"
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 flex items-center justify-center gap-3 transition">
            Subscribe
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
