import React, { useState } from "react";
import logo from "../../assets/images/Logo.png";
import menuIcon from "../../assets/images/menu.png";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0e0e0e] text-white px-6 py-3 flex items-center justify-between relative">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-6 h-6" />
        <span className="font-lexend font-bold text-lg">YourBanK</span>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <a href="#" className="font-lexend px-3 py-1 rounded-full bg-[#1c1c1c]">
          Home
        </a>
        <a href="#" className="font-lexend hover:text-gray-300">
          Careers
        </a>
        <a href="#" className="font-lexend hover:text-gray-300">
          About
        </a>
        <a href="#" className="font-lexend hover:text-gray-300">
          Security
        </a>
      </div>

      <div className="hidden md:flex items-center gap-3">
        <button className="font-lexend text-sm hover:text-gray-300">
          Sign up
        </button>
        <button className="bg-lime-400 font-lexend text-black px-4 py-1 rounded-full text-sm hover:bg-lime-500">
          Login
        </button>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <img src={menuIcon} alt="menu" className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#1c1c1c] flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <a href="#" className="font-lexend px-3 py-1 rounded-full bg-[#333]">
            Home
          </a>
          <a href="#" className="font-lexend hover:text-gray-300">
            Careers
          </a>
          <a href="#" className="font-lexend hover:text-gray-300">
            About
          </a>
          <a href="#" className="font-lexend hover:text-gray-300">
            Security
          </a>
          <button className="font-lexend text-sm hover:text-gray-300">
            Sign up
          </button>
          <button className="bg-lime-400 font-lexend text-black px-4 py-1 rounded-full text-sm hover:bg-lime-500">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
