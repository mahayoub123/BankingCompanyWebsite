import React from "react";

const UseCases: React.FC = () => {
  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className=" font-lexend text-3xl md:text-4xl font-bold text-lime-400">
          Use Cases
        </h2>
        <p className=" font-lexend mt-3 text-gray-300 max-w-3xl mx-auto">
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-lime-400">
            For Individuals
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="font-lexend bg-[#141414] border border-lime-400/30 rounded-xl p-6 text-center">
              Managing Personal Finances
            </div>
            <div className=" font-lexend bg-[#141414] border border-lime-400/30 rounded-xl p-6 text-center">
              Saving for the Future
            </div>
            <div className=" font-lexend bg-[#141414] border border-lime-400/30 rounded-xl p-6 text-center">
              Homeownership
            </div>
            <div className="font-lexend  bg-[#141414] border border-lime-400/30 rounded-xl p-6 text-center">
              Education Funding
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xl">
              <span className="font-lexend text-lime-400 font-bold">78%</span>{" "}
              Secure Retirement Planning
            </p>
            <p className="text-xl">
              <span className="font-lexend text-lime-400 font-bold">63%</span>{" "}
              Manageable Debt Consolidation
            </p>
            <p className="text-xl">
              <span className="font-lexend text-lime-400 font-bold">91%</span>{" "}
              Reducing Financial Burdens
            </p>
          </div>

          <button className="hover:bg-gray-700 font-lexend mt-6 px-6 py-2 bg-lime-400 text-black font-semibold rounded-xl">
            Learn More
          </button>
        </div>

        <div>
          <h3 className="font-lexend text-2xl font-semibold mb-6 text-lime-400">
            For Business
          </h3>

          <div className="space-y-4 mb-8">
            <p className="text-xl">
              <span className="font-lexend text-lime-400 font-bold">65%</span>{" "}
              Cash Flow Management
            </p>
            <p className="text-xl">
              <span className="font-lexend text-lime-400 font-bold">70%</span>{" "}
              Drive Business Expansion
            </p>
            <p className="text-xl">
              <span className="font-lexend text-lime-400 font-bold">45%</span>{" "}
              Streamline Payroll Processing
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="font-lexend bg-[#141414] border border-lime-400/30 rounded-xl p-6 text-center">
              Startups & Entrepreneurs
            </div>
            <div className="font-lexend bg-[#141414] border border-lime-400/30 rounded-xl p-6 text-center">
              Cash Flow Management
            </div>
            <div className="font-lexend bg-[#141414] border border-lime-400/30 rounded-xl p-6 text-center">
              Business Expansion
            </div>
            <div className="font-lexend bg-[#141414] border border-lime-400/30 rounded-xl p-6 text-center">
              Payment Solutions
            </div>
          </div>

          <button className=" hover:bg-gray-700 font-lexend mt-6 px-6 py-2 bg-lime-400 text-black font-semibold rounded-xl">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
