import React from "react";
import arrow from "../../assets/images/arrow.png";
const Hero: React.FC = () => {
  return (
    <section className="bg-[#0e0e0e] text-white min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12">
      <div className="max-w-xl text-center lg:text-left">
        <span className=" font-lexend bg-[#1b1b1b] text-sm px-3 py-1 rounded-full">
          No LLC Required, No Credit Check.
        </span>
        <h1 className=" font-lexend text-3xl lg:text-5xl font-bold mt-6 leading-snug">
          Welcome to YourBank <br />
          Empowering Your{" "}
          <span className="font-lexend text-lime-400">Financial Journey</span>
        </h1>
        <p className="font-lexend text-gray-400 mt-4">
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial
          goals. We are committed to delivering personalized and innovative
          services that prioritize our customers&apos; needs.
        </p>
        <button className="font-lexend mt-6 bg-lime-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-lime-500 transition">
          Open Account
        </button>
      </div>

      <div className="bg-[#1b1b1b] mt-10 lg:mt-0 rounded-2xl p-6 w-full max-w-md shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="font-lexend text-sm text-gray-400">Monthly Income</p>
            <p className="font-lexend text-xl font-bold">$5000.00</p>
          </div>
          <img src={arrow} className="text-lime-400 w-8 h-8" />
        </div>

        <div>
          <p className="font-lexend font-semibold mb-3">Your Transactions</p>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="font-lexend">Joel Kenley</span>
              <span className="font-lexendtext-red-500">- $68.00</span>
            </li>
            <li className="flex justify-between">
              <span className="font-lexend">Mark Smith</span>
              <span className="text-red-500 font-lexend">- $86.00</span>
            </li>
            <li className="flex justify-between">
              <span className="font-lexend">Money Transfer</span>
              <span className="text-red-500 font-lexend">- $60.00</span>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <p className=" font-lexend font-semibold mb-3">Money Exchange</p>
          <div className="flex justify-between bg-[#0e0e0e] p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <span role="img" aria-label="INR">
                🇮🇳
              </span>
              <p className="font-lexend">INR</p>
            </div>
            <span className="font-lexend text-gray-400">50000</span>
          </div>
          <div className="flex justify-between bg-[#0e0e0e] p-3 rounded-lg mt-2">
            <div className="flex items-center gap-2">
              <span role="img" aria-label="USD">
                🇺🇸
              </span>
              <p className="font-lexend">USD</p>
            </div>
            <span className="font-lexend text-gray-400">1200</span>
          </div>
          <button className=" font-lexend mt-4 w-full bg-lime-400 text-black py-3 rounded-lg font-semibold hover:bg-lime-500 transition">
            Exchange
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
