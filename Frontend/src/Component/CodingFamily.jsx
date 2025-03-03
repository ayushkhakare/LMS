import { FaYoutube, FaLinkedin, FaDiscord, FaTelegram } from "react-icons/fa";

function CodingFamily() {
  return (
    <div className="h-180 flex flex-col items-center justify-center bg-[#0D1721] text-white p-8">
      <h1 className="text-6xl font-bold mb-6 text-center">Welcome to Our Coding Family</h1>
      <p className="text-xl text-center max-w-3xl mb-8">
        Join a supportive community of passionate coders, where learning, collaboration, and innovation come together. Embark on your coding journey with us.
      </p>
      <div className="flex space-x-40 mt-9 text-8xl">
        <a href="https://youtube.com" className=" text-red-700 hover:text-red-600 transition transform hover:scale-110">
          <FaYoutube />
        </a>
        <a href="https://linkedin.com" className=" text-blue-700 hover:text-blue-700 transition transform hover:scale-110">
          <FaLinkedin />
        </a>
        <a href="https://discord.com" className=" text-indigo-500 hover:text-indigo-500 transition transform hover:scale-110">
          <FaDiscord />
        </a>
        <a href="https://telegram.org" className=" text-blue-400 hover:text-blue-400 transition transform hover:scale-110">
          <FaTelegram />
        </a>
      </div>
    </div>
  );
}

export default CodingFamily;
