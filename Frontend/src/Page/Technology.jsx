import React from "react";

const categories = [
  {
    title: "Certifications by Issuer",
    items: [
      "Amazon Web Services (AWS) Certifications",
      "Six Sigma Certifications",
      "Microsoft Certifications",
      "Cisco Certifications",
      "Tableau Certifications",
      "See all Certifications",
    ],
  },
  {
    title: "Web Development",
    items: ["JavaScript", "React JS", "Angular", "Java"],
  },
  {
    title: "IT Certifications",
    items: [
      "Amazon AWS",
      "AWS Certified Cloud Practitioner",
      "AZ-900: Microsoft Azure Fundamentals",
      "AWS Certified Solutions Architect - Associate",
      "Kubernetes",
    ],
  },
  {
    title: "Leadership",
    items: [
      "Management Skills",
      "Project Management",
      "Personal Productivity",
      "Emotional Intelligence",
    ],
  },
  {
    title: "Certifications by Skill",
    items: [
      "Cybersecurity Certification",
      "Project Management Certification",
      "Cloud Certification",
      "Data Analytics Certification",
      "HR Management Certification",
      "See all Certifications",
    ],
  },
  {
    title: "Data Science",
    items: ["Python", "Machine Learning", "ChatGPT", "Deep Learning"],
  },
  {
    title: "Communication",
    items: [
      "Communication Skills",
      "Presentation Skills",
      "Public Speaking",
      "Writing",
      "PowerPoint",
    ],
  },
  {
    title: "Business Analytics & Intelligence",
    items: [
      "Microsoft Excel",
      "SQL",
      "Microsoft Power BI",
      "Data Analysis",
      "Business Analysis",
    ],
  },
];

function Technology() {
  return (
    <div className="bg-[#434343] min-h-screen p-8">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Explore Top Skills & Certifications
      </h1>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-12">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-[#434343]  p-6 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Section Title */}
            <h2 className="text-xl text-white font-semibold text-gray-700 mb-4">
              {category.title}
            </h2>

            {/* List Items */}
            <div className="space-y-2">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="text-white hover:text-blue-500 transition-colors duration-200"
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technology;