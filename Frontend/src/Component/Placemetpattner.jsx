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
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "linear-gradient(45deg, #0d1721, #1a2940)",
            "linear-gradient(45deg, #1a2940, #0d1721)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
      />

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
              duration: 15, // Increased speed for a more dynamic effect
              ease: "linear",
            },
          }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="flex flex-col items-center mx-4 w-48 h-60 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 shadow-lg transition-all hover:border-[#ffc0c7] hover:shadow-[0_0_20px_#ffc0c7] cursor-pointer"
              whileHover={{ scale: 1.05, y: -10 }} // Enhanced hover effect
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={partner.logo}
                alt={`Logo of ${partner.name}`}
                className="w-32 h-32 object-contain transition-transform duration-300 transform hover:scale-110"
              />
              <h2 className="text-xl font-bold text-white mt-4">{partner.name}</h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Placementpartners;