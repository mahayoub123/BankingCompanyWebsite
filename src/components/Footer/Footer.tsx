import React from "react";
import facebookIcon from "../../assets/images/Facebook.svg";
import twitterIcon from "../../assets/images/Twitter.svg";
import linkedinIcon from "../../assets/images/Linkedin.svg";
import logo from "../../assets/images/Logo.png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0d] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="bg-[#151515] p-6 md:p-10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h2 className=" font-lexend text-xl md:text-2xl font-semibold text-white">
              Start your financial journey with{" "}
              <span className="text-lime-400">YourBank</span> today!
            </h2>
            <p className=" font-lexend mt-2 text-gray-400 text-sm md:text-base">
              Ready to take control of your finances? Join YourBank now, and let
              us help you achieve your financial goals with our tailored
              solutions and exceptional customer service.
            </p>
          </div>
          <button className="font-lexend bg-lime-400 text-black px-6 py-2 rounded-full font-medium hover:bg-lime-300 transition">
            Open Account
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700 py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8">
          <div className="text-center">
            <img
              className="text-lime-400 text-2xl font-bold"
              src={logo}
              alt="logo"
            />
          </div>

          <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <li className="font-lexend hover:text-lime-400 transition cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="font-lexend hover:text-lime-400 transition cursor-pointer">
              <a href="/careers">Careers</a>
            </li>
            <li className="font-lexend hover:text-lime-400 transition cursor-pointer">
              <a href="/about">About</a>
            </li>
            <li className="font-lexend hover:text-lime-400 transition cursor-pointer">
              <a href="/seq">Security</a>
            </li>
          </ul>

          <div className="flex flex-col md:flex-row items-center gap-6 text-gray-400 text-sm">
            <p className="font-lexend"> hello@skillbridge.com</p>
            <p className="font-lexend"> +91 91813 23 2309</p>
            <p className="font-lexend">Somewhere in the World</p>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#151515] hover:bg-lime-400 hover:text-black transition"
            >
              <img src={facebookIcon} alt="icon" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#151515] hover:bg-lime-400 hover:text-black transition"
            >
              <img src={twitterIcon} alt="icon" />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#151515] hover:bg-lime-400 hover:text-black transition"
            >
              <img src={linkedinIcon} alt="icon" />
            </a>
          </div>

          <div className=" font-lexend flex flex-col md:flex-row justify-between items-center w-full text-xs text-gray-500 border-t border-gray-800 pt-6 gap-4">
            <p>© YourBank. All Rights Reserved</p>
            <div className="flex gap-4">
              <a href="#" className="font-lexend hover:text-lime-400">
                Privacy Policy
              </a>
              <a href="#" className="font-lexend hover:text-lime-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
