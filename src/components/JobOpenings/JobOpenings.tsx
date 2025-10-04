import React from "react";

interface Job {
  id: number;
  title: string;
  location: string;
  department: string;
  about: string;
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Relationship Manager",
    location: "Location: Berlin, DE",
    department: "Department: Retail Banking",
    about:
      "As a Relationship Manager, you will be responsible for managing client relationships and ensuring customer satisfaction. You’ll develop financial strategies, identify client needs, and offer personalized banking solutions.",
    requirements: [
      "Bachelor’s degree in Business, Finance, or related field",
      "Minimum of 3 years’ experience in relationship management",
      "Excellent communication and networking skills",
      "Strong knowledge of banking products and services",
    ],
  },
  {
    id: 2,
    title: "Risk Analyst",
    location: "Location: London, UK",
    department: "Department: Risk Management",
    about:
      "As a Risk Analyst, you will identify and analyze potential risks affecting the company’s assets, earning capacity, or success. You’ll work with teams to implement risk management strategies and ensure compliance with regulations.",
    requirements: [
      "Bachelor’s degree in Finance, Economics, or Mathematics",
      "Strong analytical and problem-solving skills",
      "Experience with data modeling and risk assessment",
      "Ability to present findings clearly to management",
    ],
  },
  {
    id: 3,
    title: "IT Security Specialist",
    location: "Location: Tokyo, JP",
    department: "Department: Information Technology",
    about:
      "As an IT Security Specialist, you’ll be responsible for securing the company’s digital infrastructure, monitoring for threats, and ensuring compliance with cybersecurity regulations.",
    requirements: [
      "Bachelor’s degree in Computer Science, Information Security, or related field",
      "Minimum of 4 years’ experience in IT security",
      "Proficiency with network and system security protocols",
      "Relevant certifications like CISSP or CEH are preferred",
    ],
  },
];

const JobOpenings: React.FC = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#c5ff3f] mb-4">
          Job Openings
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore exciting career opportunities where we value talent,
          innovation, and opportunities for customer service. Take your next
          career step and grow with us.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-[#111111] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between hover:border-[#c5ff3f] transition-all"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {job.title}
              </h3>
              <p className="text-sm text-gray-400">{job.location}</p>
              <p className="text-sm text-gray-400 mb-4">{job.department}</p>

              <h4 className="text-[#c5ff3f] font-semibold mb-2">
                About This Job
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {job.about}
              </p>

              <h4 className="text-[#c5ff3f] font-semibold mb-2">
                Requirements & Qualifications
              </h4>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-6">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <button className="bg-[#c5ff3f] text-black font-semibold py-2 px-4 rounded-full self-start hover:bg-lime-400 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobOpenings;
