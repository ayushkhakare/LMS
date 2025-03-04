import { FaYoutube, FaLinkedin, FaDiscord, FaTelegram, FaLaptopCode } from "react-icons/fa";

function CodingFamily() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-8">
      {/* Main Header */}
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-center animate__animated animate__fadeIn animate__delay-1s">
        Welcome to Our Coding Family
      </h1>
      
      {/* Subtext */}
      <p className="text-lg sm:text-xl text-center max-w-3xl mb-8 animate__animated animate__fadeIn animate__delay-2s opacity-80">
        Join a supportive community of passionate coders, where learning, collaboration, and innovation come together. Embark on your coding journey with us.
      </p>
      
      {/* Coding Icon and Title */}
      <div className="flex items-center justify-center space-x-3 mb-8 animate__animated animate__fadeIn animate__delay-3s">
        <FaLaptopCode className="text-white text-6xl animate__pulse animate__infinite" />
        <p className="text-lg sm:text-2xl font-semibold opacity-90">Building the Future, One Line of Code at a Time</p>
      </div>
      
      {/* Social Media Icons with Names */}
      <div className="flex space-x-12 mt-8 text-6xl sm:text-8xl">
        <div className="flex flex-col items-center">
          <a
            href="https://youtube.com"
            className="text-red-700 hover:text-red-500 transition duration-300 transform hover:scale-110 hover:rotate-12"
          >
            <FaYoutube />
          </a>
          <span className="mt-2 text-sm">YouTube</span>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://linkedin.com"
            className="text-blue-700 hover:text-blue-500 transition duration-300 transform hover:scale-110 hover:rotate-12"
          >
            <FaLinkedin />
          </a>
          <span className="mt-2 text-sm">LinkedIn</span>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://discord.com"
            className="text-indigo-500 hover:text-indigo-400 transition duration-300 transform hover:scale-110 hover:rotate-12"
          >
            <FaDiscord />
          </a>
          <span className="mt-2 text-sm">Discord</span>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://telegram.org"
            className="text-blue-400 hover:text-blue-300 transition duration-300 transform hover:scale-110 hover:rotate-12"
          >
            <FaTelegram />
          </a>
          <span className="mt-2 text-sm">Telegram</span>
        </div>
      </div>

      {/* Call to Action Text */}
      <div className="mt-12">
        <p className="text-center text-lg sm:text-xl font-semibold opacity-90">
          Join our community today and start coding with top-tier developers. 🚀
        </p>
      </div>

      {/* Animated Footer Section */}
      <div className="mt-12 animate__animated animate__zoomIn animate__delay-4s">
        <p className="text-center text-xl sm:text-2xl font-bold opacity-80">
          <span className="text-yellow-400">Unlock your potential</span> and become a coding pro with us. 👨‍💻👩‍💻
        </p>
      </div>
    </div>
  );
}

export default CodingFamily;
