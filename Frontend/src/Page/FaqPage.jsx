import React, { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "How does ArrayLogic Academy help with classroom management?",
    answer: "ArrayLogic Academy provides tools for managing student progress, organizing courses, and tracking performance, making classroom management efficient and streamlined."
  },
  {
    question: "Can I create customized learning paths for my students?",
    answer: "Yes! ArrayLogic Academy offers tools to create personalized study plans for each student. This allows you to cater to different learning paces and styles, ensuring every student stays engaged and on track."
  },
  {
    question: "What types of teaching materials are available?",
    answer: "Our platform provides a rich library of ready-made teaching materials, including interactive courses, lessons, quizzes, coding challenges, and how-to guides. These resources save you time and help create more engaging learning experiences."
  },
  {
    question: "How does Academy Studio promote collaboration?",
    answer: "Academy Studio is an online code editor that supports real-time collaboration features like multiple cursors, comments, and group discussions. It allows students to work together on projects and learn from one another, enhancing the classroom dynamic."
  },
  {
    question: "How can students earn certifications through the platform?",
    answer: "Students can take certification exams directly at ArrayLogic Academy. These exams are designed to adapt to different skill levels and provide instant feedback, helping students gain valuable, industry-recognized credentials."
  },
  {
    question: "What insights does ArrayLogic Academy provide to teachers?",
    answer: "ArrayLogic Academy offers data-driven insights through performance dashboards and detailed progress reports. These tools help teachers monitor class and individual progress, identify areas for improvement, and make informed decisions to support student success."
  }
];

function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 py-16 px-8 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-3xl p-6 bg-gray-800 rounded-2xl shadow-2xl">
        <h1 className="text-4xl text-white font-bold text-center mb-8">FAQ - Teachers</h1>
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="mb-6 rounded-xl overflow-hidden shadow-md border border-gray-700"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-5 px-6 text-lg font-semibold text-white bg-gray-700 hover:bg-gray-600 transition-all duration-200"
            >
              <span>{faq.question}</span>
              <motion.span animate={{ rotate: openIndex === index ? 180 : 0 }}>
                ▼
              </motion.span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-6 bg-gray-700 text-white">
                <p>{faq.answer}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FaqPage;
