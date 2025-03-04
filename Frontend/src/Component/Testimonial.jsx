import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This service is amazing! Highly recommend to everyone.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "A wonderful experience. The team is very professional.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Michael Brown",
    feedback: "I'm extremely satisfied with the service provided!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Emily Davis",
    feedback: "Exceptional quality and fantastic support team!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "David Wilson",
    feedback: "Quick response and reliable service. Would definitely use again.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sophia Martinez",
    feedback: "The customer service was top-notch! I highly appreciate their support.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Liam Johnson",
    feedback: "A great experience overall. The process was smooth and efficient!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Olivia Taylor",
    feedback: "Very impressed with the service quality. Will recommend to my friends!",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Noah Anderson",
    feedback: "Fast, reliable, and very professional. Highly satisfied!",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const backgroundColors = [
  "bg-blue-500", // Blue
  "bg-green-500", // Green
  "bg-yellow-500", // Yellow
  "bg-pink-500", // Pink
  "bg-indigo-500", // Indigo
  "bg-purple-500", // Purple
  "bg-red-500", // Red
  "bg-teal-500", // Teal
  "bg-orange-500", // Orange
];

const textColors = [
  "text-white", // White text on colored background
  "text-gray-800", // Gray text for better contrast on lighter colors
  "text-black", // Black text for high contrast
  "text-gray-100", // Light gray text for dark background
  "text-indigo-100", // Light indigo for dark background
  "text-yellow-100", // Light yellow for dark backgrounds
];

function Testimonial() {
  return (
    <div className=" h-100 p-8 bg-gray-800 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-white mb-8 text-center">What Our Student Say</h2>
      <div className="w-full max-w-7xl">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => {
            const bgColor = backgroundColors[index % backgroundColors.length];
            const textColor = textColors[index % textColors.length];

            return (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.3 }}
                  className={`${bgColor} ${textColor} shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mb-4 border-4 border-white"
                  />
                  <p className="italic text-lg">{`"${testimonial.feedback}"`}</p>
                  <p className="mt-4 font-semibold text-xl">{`- ${testimonial.name}`}</p>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
