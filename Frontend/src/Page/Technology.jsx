import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Certifications by Issuer",
    description: "Certifications offered by leading organizations and companies.",
    items: [
      { name: "Amazon Web Services (AWS) Certifications", link: "https://aws.amazon.com/certification/", description: "AWS offers cloud computing certifications for different expertise levels." },
      { name: "Six Sigma Certifications", link: "https://www.sixsigmacouncil.org/", description: "Process improvement certifications focusing on efficiency and quality." },
      { name: "Microsoft Certifications", link: "https://learn.microsoft.com/en-us/certifications/", description: "Certifications for Microsoft technologies and cloud solutions." },
      { name: "Cisco Certifications", link: "https://www.cisco.com/c/en/us/training-events/training-certifications.html", description: "Networking and cybersecurity certifications by Cisco." },
      { name: "Tableau Certifications", link: "https://www.tableau.com/learn/certification", description: "Data visualization certifications by Tableau." },
      { name: "See all Certifications", link: "#", description: "Browse a complete list of available certifications." },
    ],
  },
  {
    title: "Web Development",
    description: "Popular programming languages and frameworks for web development.",
    items: [
      { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", description: "A versatile programming language for the web." },
      { name: "React JS", link: "https://react.dev/", description: "A JavaScript library for building user interfaces." },
      { name: "Angular", link: "https://angular.io/", description: "A web application framework by Google." },
      { name: "Java", link: "https://www.oracle.com/java/", description: "A widely-used programming language for web and enterprise applications." },
    ],
  },
  {
    title: "IT Certifications",
    description: "Industry-recognized IT certifications to advance your career.",
    items: [
      { name: "Amazon AWS", link: "https://aws.amazon.com/certification/", description: "AWS certification to validate cloud expertise." },
      { name: "AWS Certified Cloud Practitioner", link: "https://aws.amazon.com/certification/certified-cloud-practitioner/", description: "Entry-level AWS certification for cloud fundamentals." },
      { name: "AZ-900: Microsoft Azure Fundamentals", link: "https://learn.microsoft.com/en-us/certifications/exams/az-900/", description: "Microsoft Azure fundamentals certification for cloud concepts." },
      { name: "AWS Certified Solutions Architect - Associate", link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/", description: "AWS certification for designing distributed applications." },
      { name: "Kubernetes", link: "https://kubernetes.io/", description: "An open-source system for automating containerized applications." },
    ],
  },
  {
    title: "Leadership",
    description: "Essential skills for effective leadership and management.",
    items: [
      { name: "Management Skills", link: "#", description: "Develop skills for effective team management." },
      { name: "Project Management", link: "#", description: "Learn methodologies to manage projects successfully." },
      { name: "Personal Productivity", link: "#", description: "Enhance productivity with efficient time management." },
      { name: "Emotional Intelligence", link: "#", description: "Improve interpersonal skills and leadership qualities." },
    ],
  },
  {
    title: "Certifications by Skill",
    description: "Certifications to validate expertise in various skills.",
    items: [
      { name: "Cybersecurity Certification", link: "#", description: "Certifications in ethical hacking and security analysis." },
      { name: "Project Management Certification", link: "#", description: "Industry-recognized certification for project managers." },
      { name: "Cloud Certification", link: "#", description: "Validate your cloud computing skills with top certifications." },
      { name: "Data Analytics Certification", link: "#", description: "Certifications in data analysis and visualization." },
      { name: "HR Management Certification", link: "#", description: "Professional certification for human resource management." },
      { name: "See all Certifications", link: "#", description: "Explore more skill-based certifications." },
    ],
  },
  {
    title: "Data Science",
    description: "Key skills and technologies in data science and AI.",
    items: [
      { name: "Python", link: "https://www.python.org/", description: "A popular programming language for data science." },
      { name: "Machine Learning", link: "#", description: "Explore algorithms for predictive modeling." },
      { name: "ChatGPT", link: "https://openai.com/chatgpt", description: "AI-based chatbot technology." },
      { name: "Deep Learning", link: "#", description: "Advanced AI techniques for neural networks." },
    ],
  },
  {
    title: "Communication",
    description: "Improve your communication and presentation skills.",
    items: [
      { name: "Communication Skills", link: "#", description: "Enhance verbal and non-verbal communication." },
      { name: "Presentation Skills", link: "#", description: "Master the art of delivering impactful presentations." },
      { name: "Public Speaking", link: "#", description: "Develop confidence in public speaking and storytelling." },
      { name: "Writing", link: "#", description: "Improve written communication skills." },
      { name: "PowerPoint", link: "#", description: "Learn to create compelling presentation slides." },
    ],
  },
  {
    title: "Business Analytics & Intelligence",
    description: "Key tools and techniques for business analysis.",
    items: [
      { name: "Microsoft Excel", link: "https://www.microsoft.com/en-us/microsoft-365/excel", description: "Excel for data analysis and visualization." },
      { name: "SQL", link: "https://www.w3schools.com/sql/", description: "Structured Query Language for database management." },
      { name: "Microsoft Power BI", link: "https://powerbi.microsoft.com/", description: "BI tool for interactive data visualization." },
      { name: "Data Analysis", link: "#", description: "Learn data-driven decision-making techniques." },
      { name: "Business Analysis", link: "#", description: "Develop skills for analyzing and improving business processes." },
    ],
  },
];

function Technology() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  return (
    <div className="bg-gray-900 min-h-screen p-10 relative overflow-visible">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        🚀 Explore Top Skills & Certifications
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto max-w-7xl relative overflow-visible">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700"
          >
            <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
              {category.title}
            </h2>
            <p className="text-gray-400 mb-3">{category.description}</p>

            <div className="space-y-3">
              {category.items.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 cursor-pointer transition duration-200 block relative"
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  ✅ {item.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technology;