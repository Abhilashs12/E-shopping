import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
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

      const data = await loginUser(formData);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login Successful");

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5">

      <div className="bg-white shadow-xl rounded-3xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">

        {/* Left Side */}

        <div className="hidden md:flex bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex-col justify-center items-center p-10">

          <h1 className="text-5xl font-bold">
            Welcome Back
          </h1>

          <p className="mt-5 text-center text-lg">
            Login to continue shopping with ShopEase.
          </p>

        </div>

        {/* Right Side */}

        <div className="p-10">

          <h2 className="text-3xl font-bold">
            Login
          </h2>

          <p className="text-gray-500 mt-2">
            Enter your account details.
          </p>

          <form
            className="mt-8 space-y-5"
            onSubmit={handleSubmit}
          >

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border rounded-xl px-5 py-4 outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full border rounded-xl px-5 py-4 outline-none"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-5 top-5 text-gray-500"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <p className="text-center mt-6">

            Don't have an account?

            <Link
              to="/register"
              className="text-blue-600 font-semibold ml-2"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;