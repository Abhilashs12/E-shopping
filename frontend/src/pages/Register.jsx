import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await registerUser(formData);

      alert("Registration Successful");

      navigate("/login");
    }catch (error) {
  console.log("Error:", error);
  console.log("Response:", error.response);
  console.log("Data:", error.response?.data);

  alert(error.response?.data?.message || error.message);
}
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-5">

      <div className="bg-white rounded-3xl shadow-xl max-w-5xl w-full grid md:grid-cols-2 overflow-hidden">

        {/* Left */}

        <div className="hidden md:flex bg-blue-600 text-white justify-center items-center p-10">

          <div>
            <h1 className="text-5xl font-bold">
              Join ShopEase
            </h1>

            <p className="mt-5 text-lg">
              Create your account and start shopping today.
            </p>
          </div>

        </div>

        {/* Right */}

        <div className="p-10">

          <h2 className="text-3xl font-bold">
            Register
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 mt-8"
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full border rounded-xl px-5 py-4"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border rounded-xl px-5 py-4"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border rounded-xl px-5 py-4"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition"
            >
              {loading ? "Creating Account..." : "Register"}
            </button>

          </form>

          <p className="mt-6 text-center">
            Already have an account?

            <Link
              to="/login"
              className="text-blue-600 font-semibold ml-2"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;
