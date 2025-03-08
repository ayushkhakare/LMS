import React from "react";

const reviews = [
  {
    name: "Parth Singh",
    designation: "2nd year student",
    img: "/s1.jpg",
    review:
      "The way bhaiya has explained everything is phenomenal. When he said he would start from zero, he actually did it—all the basics were explained and repeated 3-4 times on different test cases. Live classes also helped me be consistent.",
  },
  {
    name: "Vedant Jain",
    designation: "Final year student",
    img: "/s2.jpg",
    review:
      "I've tried understanding DSA many times using different resources, but the Supreme batch really stood out. The way and quality of teaching is unmatched.",
  },
  {
    name: "Rishi Kant",
    designation: "BBA Student",
    img: "/s3.jpg",
    review:
      "This was the best course I ever completed. You won’t believe I’m graduating from BBA, but his teaching made me start loving coding. Now, just because of this course, I am looking for a job in IT.",
  },
  {
    name: "Chirag Arora",
    designation: "Student",
    img: "/s4.jpg",
    review:
      "Best DSA paid course one could ever come across online—affordable and delivered much more than what it cost. The variety of questions is top notch and definitely better than courses costing 20-25K.",
  },
  {
    name: "Anshika Aggarwal",
    designation: "1.5 YOE as MTS",
    img: "/s5.jpg",
    review:
      "When I started this course, I was not at all confident in DSA, but now I feel so confident. I want to say thanks to Love Bhaiya and Lakshay Bhaiya from the bottom of my heart. Thank you so much for sharing your knowledge with us.",
  },
  {
    name: "Bhavya Bhalla",
    designation: "Student",
    img: "/s6.jpg",
    review:
      "This course is beginner friendly, starting from the basics of C++ to advanced concepts like Graphs and DP. Before this course, I was very much afraid of DP, but the rules taught here can be applied to most DP problems.",
  },
];

function SuccessStories() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black py-10 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-6">
          Our Success Stories
        </h1>
        <p className="text-center text-base sm:text-lg text-white max-w-2xl mx-auto mb-10">
          Discover inspiration and insights through recent reviews from our students. Their success stories reflect the transformative journey of learning and growth with{" "}
          <span className="text-blue-600 font-semibold">ArrayLogic</span>.
        </p>

        {/* Reviews Container */}
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
  {reviews.map((review, index) => (
    <div
      key={index}
      className="bg-gray-800  rounded-lg shadow-md p-4 flex flex-col sm:flex-row gap-3 w-full transform transition duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
    >
      {/* Profile Avatar or Image */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-md overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold text-xl">
        {review.img ? (
          <img
            src={review.img}
            alt={review.name}
            className="w-full h-full object-cover"
          />
        ) : (
          review.name.charAt(0)
        )}
      </div>

      {/* Review Content */}
      <div className="flex-1 text-left">
        <h2 className="text-base sm:text-lg font-semibold text-white">
          {review.name}
        </h2>
        <p className="text-white text-xs sm:text-sm">{review.designation}</p>
        <p className="text-white text-sm sm:text-base mt-1">
          {review.review}
        </p>
      </div>
    </div>
  ))}
</div>



      </div>
    </div>
  );
}
export default SuccessStories;
