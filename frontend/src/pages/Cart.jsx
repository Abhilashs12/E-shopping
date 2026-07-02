import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = [
    {
      id: 1,
      title: "Nike Air Max Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      price: 4999,
      quantity: 1,
    },
    {
      id: 2,
      title: "Smart Watch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      price: 2999,
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 0;
  const tax = 300;
  const total = subtotal + tax;

  return (
    <div className="bg-gray-50 min-h-screen py-14">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Cart Items */}

          <div className="lg:col-span-2 space-y-6">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow p-5 flex items-center gap-6"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-xl"
                />

                <div className="flex-1">

                  <h2 className="text-xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-blue-600 font-bold mt-2">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-4">

                    <button className="w-9 h-9 bg-gray-200 rounded-full">
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button className="w-9 h-9 bg-gray-200 rounded-full">
                      +
                    </button>

                  </div>

                </div>

                <button className="text-red-500 text-xl hover:text-red-700">
                  <FaTrash />
                </button>

              </div>
            ))}

          </div>

          {/* Summary */}

          <div className="bg-white rounded-2xl shadow p-8 h-fit">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Tax</span>
              <span>₹{tax}</span>
            </div>

            <hr className="my-5" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <Link
              to="/checkout"
              className="block mt-8 bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-xl transition"
            >
              Proceed to Checkout
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Cart;