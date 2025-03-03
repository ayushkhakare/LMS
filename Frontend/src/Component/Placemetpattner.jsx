import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Placementpartners() {
  const partners = [
    { id: 1, logo: "/accenture.png", name: "Accenture", description: "A global leader in consulting and technology services." },
    { id: 2, logo: "/TCS.jpg", name: "TCS", description: "One of the largest IT services companies in the world." },
    { id: 3, logo: "/wipro.png", name: "Wipro", description: "Innovative IT solutions provider with a global presence." },
    { id: 4, logo: "/techm.png", name: "Tech Mahindra", description: "A major player in the telecom and IT services sector." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Faster transition for a smoother effect

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  return (
    <div className="bg-gradient-to-r from-[#0d1721] to-[#1a2940] h-180 py-20 px-6 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-[#ffc0c7] mb-6 text-center drop-shadow-lg">
        🚀 Our Placement Partners 🚀
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-3xl mb-10">
        We collaborate with top-tier companies to provide our students with the best career opportunities. Our placement partners are industry leaders looking for fresh talent. Kickstart your career with us!
      </p>

      {/* Sliding Partner Logos */}
      <div className="w-full max-w-4xl overflow-hidden relative flex flex-col items-center">
        <div className="flex space-x-6 transition-transform duration-1000 ease-in-out">
          <AnimatePresence>
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="flex flex-col items-center mx-4 p-4 bg-white rounded-xl shadow-xl transition-all hover:shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={partner.logo}
                  alt={`Partner Logo ${partner.id}`}
                  className="w-32 h-32 object-contain transition-transform duration-300 transform hover:scale-110"
                />
                <h2 className="text-xl font-bold text-gray-800 mt-4">{partner.name}</h2>
                <p className="text-gray-600 text-center mt-2">{partner.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Placementpartners;