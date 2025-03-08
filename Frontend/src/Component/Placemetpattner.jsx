import React from "react";
import { motion } from "framer-motion";

function Placementpartners() {
  const partners = [
    { id: 1, logo: "/accenture.png", name: "Accenture" },
    { id: 2, logo: "/TCS.jpg", name: "TCS" },
    { id: 3, logo: "/wipro.png", name: "Wipro" },
    { id: 4, logo: "/techm.png", name: "Tech Mahindra" },
    { id: 5, logo: "/accenture.png", name: "Accenture" },
    { id: 6, logo: "/TCS.jpg", name: "TCS" },
    { id: 7, logo: "/wipro.png", name: "Wipro" },
    { id: 8, logo: "/techm.png", name: "Tech Mahindra" },
    { id: 9, logo: "/accenture.png", name: "Accenture" },
    { id: 10, logo: "/TCS.jpg", name: "TCS" },
    { id: 11, logo: "/wipro.png", name: "Wipro" },
    { id: 12, logo: "/techm.png", name: "Tech Mahindra" },
  ];

  return (
    <div className="relative bg-gradient-to-r from-[#0d1721] to-[#1a2940] h-auto py-20 px-6 flex flex-col items-center overflow-hidden">
      <h1 className="text-5xl font-extrabold text-[#ffc0c7] mb-6 text-center drop-shadow-lg z-10">
        🚀 Our Placement Partners 🚀
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-3xl mb-10 z-10">
        We collaborate with top-tier companies to provide our students with the best career opportunities.
      </p>

      {/* Continuous Sliding Partner Logos */}
      <div className="w-full max-w-6xl overflow-hidden relative z-10">
        <motion.div
          className="flex space-x-6"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {partners.map((partner) => (
            <img
              key={partner.id}
              src={partner.logo}
              alt={partner.name}
              className="w-40 h-40 object-contain mx-4 transition-transform duration-300 transform hover:scale-110"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Placementpartners;
