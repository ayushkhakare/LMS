import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const instructors = [
  {
    id: 1,
    name: "Aarushi Sharma",
    role: "Lead Instructor - ArrayLogic, Ex-Google, Ex-Facebook",
    bio: "Aarushi Sharma is a highly skilled software engineer and educator, specializing in full-stack development and AI. With years of experience at top tech companies, she has mentored thousands of students worldwide, helping them achieve their dream jobs in the industry.",
    image: "/t1.jpg",
  },
  {
    id: 2,
    name: "Meera Kapoor",
    role: "Software Engineer @Microsoft, Instructor at ArrayLogic",
    bio: "Meera Kapoor is an experienced software engineer working at Microsoft. She has a deep passion for teaching and has helped many students master data structures, algorithms, and system design through her engaging lessons and mentorship.",
    image: "/t2.webp",
  },
  {
    id: 3,
    name: "Sanya Verma",
    role: "AI Specialist @Amazon, Instructor at ArrayLogic",
    bio: "Sanya Verma is an AI specialist working at Amazon, focusing on machine learning and AI-driven applications. She loves mentoring students and has trained thousands of aspiring engineers through online and offline programs.",
    image: "/t3.webp",
  },
  {
    id: 4,
    name: "Nehal Malhotra",
    role: "Full Stack Developer @Netflix, Instructor at ArrayLogic",
    bio: "Neha Malhotra is a full-stack developer with expertise in web development and cloud technologies. Her practical approach to teaching helps students gain hands-on experience and build real-world applications.",
    image: "/t4.jpg",
  },
  {
    id: 5,
    name: "Ritik Joshi",
    role: "Cybersecurity Expert @IBM, Instructor at ArrayLogic",
    bio: "Ritika Joshi is a cybersecurity specialist at IBM, with extensive knowledge in ethical hacking and security protocols. She is passionate about empowering students with skills in cyber defense and ethical hacking.",
    image: "/t5.jpg",
  },
];

const InstructorsPage = () => {
  return (
    <div className="bg-gray-900 text-white py-16 flex flex-col items-center">
    <h1 className="text-4xl font-extrabold mb-4 text-center">Our Instructors</h1>
    <p className="text-lg text-gray-300 text-center max-w-2xl mb-8">
      Learn from the best in the industry. Our expert instructors at {" "}
      <span className="text-blue-400 font-bold">ArrayLogic</span> are here to guide you toward success.
    </p>

    <div className="w-full max-w-6xl px-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={120}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {instructors.map((instructor) => (
          <SwiperSlide key={instructor.id}>
            <div className="grid grid-cols-2 items-center gap-32">
              <div className="w-full h-auto flex justify-center items-center">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-[800px] h-[700px] object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="text-left w-full">
                <h2 className="text-4xl font-semibold text-white">{instructor.name}</h2>
                <h3 className="text-2xl text-gray-400 mb-4">{instructor.role}</h3>
                <p className="text-gray-300 text-xl leading-relaxed">{instructor.bio}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  );
};

export default InstructorsPage;
