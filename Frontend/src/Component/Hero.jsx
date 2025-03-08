function Hero() {
  return (
    <section className=" h-190 py-16 relative bg-cover bg-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.webp')",
          filter: "brightness(0.7) contrast(0.9)", // Apply filter only to background image
          zIndex: -1, // Ensure the background is behind the content
        }}
      ></div>

      {/* Hero div aligned to the left */}
      <div className="flex flex-col items-start w-full space-y-6 mt-10 px-6 sm:px-12 lg:px-24">
  {/* Main Heading */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-3xl">
    Turn your passion into success with{" "}
    <span className="text-[#F4F1EB]">flexible, career-driven learning.</span>
  </h1>

  {/* Subheading */}
  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white max-w-xl">
    Let's Learn With <span className="text-white">ArrayLogic</span>
  </h1>

  {/* Descriptive Text (Desktop version) */}
  <h4 className="md:block hidden text-lg text-gray-200 max-w-2xl">
    Connect with top-tier instructors to sharpen your skills, advance your career,
    and unlock your potential with expert guidance and hands-on learning.
  </h4>

  {/* Descriptive Text (Mobile version) */}
  <h4 className="md:hidden text-xl text-gray-200 max-w-sm">
    We connect you with top-tier instructors to help you achieve your professional
    goals and advance in your career.
  </h4>
</div>
      <div className="mt-50">
        <p className="text-2xl text-center text-white">
          Trusted by learners worldwide.
        </p>
      </div>

     



    </section>
  );
}

export default Hero;
