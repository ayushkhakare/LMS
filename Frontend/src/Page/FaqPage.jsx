import React, { useState } from "react";

const faqData = [
  {
    question: "How does ArrayLogic Academy help with classroom management?",
    answer:
      "ArrayLogic Academy simplifies classroom management with real-time tracking, automated grading, and detailed progress reports. Teachers can easily monitor student performance, provide feedback, and adjust learning goals to enhance the teaching process.",
  },
  {
    question: "Can I create customized learning paths for my students?",
    answer:
      "Yes! ArrayLogic Academy offers tools to create personalized study plans for each student. This allows you to cater to different learning paces and styles, ensuring every student stays engaged and on track.",
  },
  {
    question: "What types of teaching materials are available?",
    answer:
      "Our platform provides a rich library of ready-made teaching materials, including interactive courses, lessons, quizzes, coding challenges, and how-to guides. These resources save you time and help create more engaging learning experiences.",
  },
  {
    question: "How does Academy Studio promote collaboration?",
    answer:
      "Academy Studio is an online code editor that supports real-time collaboration features like multiple cursors, comments, and group discussions. It allows students to work together on projects and learn from one another, enhancing the classroom dynamic.",
  },
  {
    question: "How can students earn certifications through the platform?",
    answer:
      "Students can take certification exams directly at ArrayLogic Academy. These exams are designed to adapt to different skill levels and provide instant feedback, helping students gain valuable, industry-recognized credentials.",
  },
  {
    question: "What insights does ArrayLogic Academy provide to teachers?",
    answer:
      "ArrayLogic Academy offers data-driven insights through performance dashboards and detailed progress reports. These tools help teachers monitor class and individual progress, identify areas for improvement, and make informed decisions to support student success.",
  },
];

function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-600 py-16 px-8 flex justify-center items-center ">
     <div className="w-full mx-10 p-6 bg-gray-700 rounded-xl shadow-xl">

        <h1 className="text-4xl text-white font-bold text-center mb-8">FAQ - Teachers</h1>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`mb-6 rounded-lg transition-all duration-300 ease-in-out ${
              openIndex === index ? "border-4 border-green-500" : "border-2 border-transparent"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center py-5 px-6 text-lg font-semibold text-white bg-gray-700 hover:bg-gray-600 border-none rounded-t-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="p-6 bg-gray-700 rounded-b-lg text-white">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqPage;
