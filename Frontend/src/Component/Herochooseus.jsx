import { CheckCircle } from "lucide-react";

function Herochooseus() {
  const features = [
    {
      id: 1,
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world experience.",
    },
    {
      id: 2,
      title: "Hands-on Learning",
      description: "Get practical experience with interactive exercises and projects.",
    },
    {
      id: 3,
      title: "Affordable Pricing",
      description: "High-quality education at a price that fits your budget.",
    },
    {
      id: 4,
      title: "Certification",
      description: "Earn certificates to boost your resume and career prospects.",
    },
    {
      id: 5,
      title: "Flexible Learning",
      description: "Access courses anytime, anywhere, and learn at your own pace.",
    },
    {
      id: 6,
      title: "24/7 Support",
      description: "Get assistance from our team whenever you need help.",
    },
    {
      id: 7,
      title: "Expert-Curated Content",
      description: "Our courses are designed by experts to give you the best learning experience.",
    },
    {
      id: 8,
      title: "Interactive Community",
      description: "Engage with peers and instructors for a collaborative learning experience.",
    },
    {
      id: 9,
      title: "Job Assistance",
      description: "Receive support with job placement and internship opportunities after course completion.",
    },
    {
      id: 10,
      title: "Up-to-date Curriculum",
      description: "Courses are regularly updated to keep up with the latest industry trends and technologies.",
    },
    {
      id: 11,
      title: "Free Trial",
      description: "Try our courses for free before committing to a full subscription.",
    },
    {
      id: 12,
      title: "Lifetime Access",
      description: "Get lifetime access to course materials and updates, even after completion.",
    },
  ];

  return (
    <>
      <div className="bg-gray-600 py-16 px-6 text-white">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-[#ffc0c7] mb-12">
          Why Choose Us?
        </h1>

        {/* Feature Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start justify-start"
            >
              <CheckCircle className="text-green-400 w-10 h-10 mr-6" />
              <div>
                <h2 className="text-xl font-semibold">{feature.title}</h2>
                <p className="text-gray-300 mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Herochooseus;
