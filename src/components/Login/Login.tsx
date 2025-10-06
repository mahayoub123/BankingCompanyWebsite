import React from "react";
import googleIcon from "../../assets/images/Icon Container.svg";
import facebookIcon from "../../assets/images/Icon Container2.svg";
import appleIcon from "../../assets/images/Icon Container3.svg";
import { useNavigate } from "react-router-dom";
const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0b0b0b] text-white px-4">
      <div className="w-full max-w-md bg-[#121212]/80 backdrop-blur-md rounded-2xl shadow-lg p-8 relative">
        <div className="text-center mb-8">
          <h1 className=" font-lexend text-[#b4ff00] text-3xl font-semibold mb-2">
            Login
          </h1>
          <p className="  font-lexend text-gray-400 text-sm">
            Welcome back! Please log in to access your account.
          </p>
        </div>

        <form className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full bg-[#1c1c1c] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className="w-full bg-[#1c1c1c] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-[#b4ff00] hover:underline transition"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-[#b4ff00] text-black font-semibold rounded-full py-3 hover:bg-[#a4ef00] transition"
          >
            Login
          </button>

          <button
            onClick={handleSignUp}
            type="button"
            className="w-full border border-gray-700 text-gray-300 rounded-full py-3 hover:bg-[#1c1c1c] transition"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center justify-center gap-3 mt-8 mb-4">
          <div className="h-px w-1/3 bg-gray-700"></div>
          <p className="text-gray-500 text-sm">or continue with</p>
          <div className="h-px w-1/3 bg-gray-700"></div>
        </div>

        <div className="flex justify-center gap-6">
          <button className="p-3 bg-[#1c1c1c] rounded-full hover:bg-[#b4ff00] hover:text-black transition">
            <img src={googleIcon} alt="icon" />
          </button>
          <button className="p-3 bg-[#1c1c1c] rounded-full hover:bg-[#b4ff00] hover:text-black transition">
            <img src={facebookIcon} alt="icon" />
          </button>
          <button className="p-3 bg-[#1c1c1c] rounded-full hover:bg-[#b4ff00] hover:text-black transition">
            <img src={appleIcon} alt="icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
