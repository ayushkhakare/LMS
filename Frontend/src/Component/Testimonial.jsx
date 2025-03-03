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

function Testimonial() {
  return (
    <div className="p-6 bg-gray-100  flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
      <div className="w-full max-w-6xl">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50}}
                animate={{ opacity: 3, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:bg-gray-50 transition"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-gray-800 italic">"{testimonial.feedback}"</p>
                <p className="mt-2 font-semibold text-lg">- {testimonial.name}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;