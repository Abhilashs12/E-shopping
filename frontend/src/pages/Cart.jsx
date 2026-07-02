import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 0;
  const tax = cartItems.length > 0 ? 300 : 0;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">
          Your Cart is Empty
        </h1>

        <p className="text-gray-500 mb-8">
          Add some products to continue shopping.
        </p>

        <Link
          to="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

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
                key={item._id}
                className="bg-white rounded-2xl shadow p-5 flex items-center gap-6"
              >

                {/* Product Image */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-28 h-28 bg-gray-200 rounded-xl flex items-center justify-center">
                    <span className="text-gray-500 text-sm">
                      No Image
                    </span>
                  </div>
                )}

                {/* Product Details */}
                <div className="flex-1">

                  <h2 className="text-xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-blue-600 font-bold mt-2">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-4">

                    <button
                      onClick={() => decreaseQty(item._id)}
                      className="w-9 h-9 bg-gray-200 rounded-full"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item._id)}
                      className="w-9 h-9 bg-gray-200 rounded-full"
                    >
                      +
                    </button>

                  </div>

                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 text-xl hover:text-red-700"
                >
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
              <span className="text-green-600">
                Free
              </span>
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