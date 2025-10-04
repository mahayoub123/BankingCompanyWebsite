import React from "react";
import missionImg from "../../assets/images/vision1.png";
import visionImg from "../../assets/images/vision2.png";

const MissionVision: React.FC = () => {
  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-[#b4ff00] text-3xl md:text-4xl font-semibold mb-2">
          Mission & Vision
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
          We are driven by innovation, integrity, and inclusivity—creating a
          brighter financial future for individuals and businesses while
          maintaining strong community connections.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="flex-1">
          <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden p-6 border border-[#2b2b2b]">
            <img
              src={missionImg}
              alt="Mission"
              className="w-full h-60 object-cover rounded-xl mb-6"
            />
            <h3 className="text-[#b4ff00] text-xl font-semibold mb-3">
              Mission
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Our mission is to empower our customers to achieve financial
              success. We are dedicated to delivering modern banking solutions
              that are fast, reliable, and secure. Through technology and
              customer-centric innovation, we aim to make financial management
              simpler, more intuitive, and more rewarding for everyone.
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden p-6 border border-[#2b2b2b]">
            <img
              src={visionImg}
              alt="Vision"
              className="w-full h-60 object-cover rounded-xl mb-6"
            />
            <h3 className="text-[#b4ff00] text-xl font-semibold mb-3">
              Vision
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Our vision is to redefine banking by creating an intelligent and
              personalized experience for our customers. We aim to become a
              trusted financial partner, providing world-class services driven
              by innovation, sustainability, and social responsibility — setting
              new standards for excellence, trust, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
