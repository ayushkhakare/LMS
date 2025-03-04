import { useState, useEffect } from "react";

function Offer() {
  const [offers, setOffers] = useState([
    { id: 1, title: "50% Off on Web Development Course", expiresIn: 150000 },
    { id: 2, title: "Buy 1 Get 1 Free on JavaScript Mastery", expiresIn: 310000 },
    { id: 3, title: "Limited Time: 30% Discount on React Course", expiresIn: 70000 },
    { id: 4, title: "Exclusive: 40% Off on Full Stack Bootcamp", expiresIn: 200000 },
    { id: 5, title: "Flash Sale: 60% Off on Python Course", expiresIn: 90000 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffers((prevOffers) =>
        prevOffers.map((offer) =>
          offer.expiresIn > 0
            ? { ...offer, expiresIn: offer.expiresIn - 1000 }
            : { ...offer, expired: true }
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getBoxColor = (time, expired) => {
    if (expired) return "bg-red-900 text-white";
    if (time <= 30000) return "bg-red-500 text-white";
    if (time <= 90000) return "bg-yellow-500 text-black";
    return "bg-white text-gray-800";
  };

  return (
    <div className="bg-gray-600 flex flex-col items-center justify-center p-6 h-190">
      <h1 className="text-4xl font-extrabold text-white mb-8 animate-bounce drop-shadow-lg">🔥 Today's Special Offers 🔥</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`relative p-6 rounded-xl shadow-2xl transition duration-300 border-4 ${getBoxColor(offer.expiresIn, offer.expired)} transform hover:scale-105`}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
            <h2 className="text-xl font-bold">{offer.title}</h2>
            {offer.expired ? (
              <p className="text-lg font-semibold text-white mt-2">😞 Sorry, you are late! This offer has expired.</p>
            ) : (
              <p className="font-semibold mt-2">
                Expires in: {Math.floor(offer.expiresIn / 60000)}m {((offer.expiresIn % 60000) / 1000).toFixed(0)}s
              </p>
            )}
          </div>
        ))}
      </div>
      <p className="mt-7 text-white text-xl font-semibold text-center leading-relaxed">
        🎉 Unlock Exclusive Discounts! 🎓  
        We believe **quality education** should be accessible to everyone. 
        <br />
        Enjoy special offers on our courses and start your learning journey today! 
      </p>
    </div>
  );
}

export default Offer;
