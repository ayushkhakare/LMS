function Hero() {
    return (
      <section className="bg-gradient-to-b from-cyan-100/70 py-16">
        <div className="flex flex-col items-center justify-center w-full px-6 space-y-6 text-center mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 max-w-3xl mx-auto">
            Turn your passion into success with{" "}
            <span className="text-blue-600">flexible, career-driven learning.</span>
          </h1>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-xl mx-auto">
            Let's Learn With{" "}
            <span className="text-blue-600">ArrayLogic</span>
          </h1>
  
          <h4 className="md:block hidden text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with top-tier instructors to sharpen your skills, advance your
            career, and unlock your potential with expert guidance and hands-on
            learning.
          </h4>
  
          <h4 className="md:hidden text-xl text-gray-600 max-w-sm mx-auto">
            We connect you with top-tier instructors to help you achieve your
            professional goals.
          </h4>
        </div>
  
        <div className="mt-8">
          <p className="text-xl text-center text-gray-600">
            Trusted by learners worldwide.
          </p>
        </div>
  
        <div className="flex w-full justify-center items-center gap-12 my-16 flex-wrap">
          <img
            src="accenture.png"
            alt="Accenture"
            className="h-16 md:h-20 object-contain transition-transform transform hover:scale-110"
          />
          <img
            src="TCS.jpg"
            alt="TCS"
            className="h-16 md:h-20 object-contain transition-transform transform hover:scale-110"
          />
          <img
            src="wipro.png"
            alt="Wipro"
            className="h-16 md:h-20 object-contain transition-transform transform hover:scale-110"
          />
          <img
            src="techm.png"
            alt="Tech Mahindra"
            className="h-16 md:h-20 object-contain transition-transform transform hover:scale-110"
          />
          <img
            src="cogni.png"
            alt="Cognizant"
            className="h-16 md:h-20 object-contain transition-transform transform hover:scale-110"
          />
        </div>
      </section>
    );
  }
  
  export default Hero;
  