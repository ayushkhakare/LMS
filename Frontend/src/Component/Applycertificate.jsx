import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function ApplyCertification() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const certificates = [
        { img: "/c1.jpeg", title: "Web Development Certification" },
        { img: "/c2.jpeg", title: "Data Science Certification" },
        { img: "/Hover.jpg", title: "Cloud Computing Certification" },
        { img: "/c3.webp", title: "AI & Machine Learning Certification" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3500/notification", formData);
            alert("Your application has been submitted successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Error submitting application:", error.message);
            alert("Failed to submit application. Please try again later.");
        }
    };

    return (
        <div className="bg-[#0d1721] min-h-screen flex items-center justify-center p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full items-center">
                
                {/* Certificate Display Section */}
                <motion.div 
                    className="relative w-full flex flex-col items-center overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Sticky Heading */}
                    <h1 className="text-white text-2xl font-bold mb-4 sticky top-0 bg-[#0d1721] p-3 w-full text-center">
                        Our Free Certificate
                    </h1>

                    {/* Rotating Certificates */}
                    <div className="relative w-full h-96 flex items-center justify-center">
                        {certificates.map((certificate, index) => (
                            <motion.div 
                                key={index}
                                className={`absolute w-full flex flex-col items-center transition-opacity duration-1000 ${
                                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <img src={certificate.img} alt={certificate.title} className="w-full max-w-md rounded-lg shadow-lg" />
                                <h3 className="text-lg font-semibold mt-4 text-white">{certificate.title}</h3>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certification Information Below Image */}
                    <div className="text-center text-gray-300 text-lg mt-6 mb-6 max-w-lg">
                        <p>
                            Our academy provides globally recognized certifications in various domains, including Web Development, Data Science, AI, and Cloud Computing.
                            These certifications validate your expertise and enhance career opportunities. Join us and gain industry-relevant skills from experts.
                        </p>
                    </div>
                </motion.div>

                {/* Application Form Section */}
                <motion.div 
                    className="bg-gray-600 p-8 rounded-xl shadow-lg text-white w-full"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-3xl font-bold mb-4 text-center">Apply for a Free Certificate</h2>
                    <p className="text-gray-200 text-sm text-center mb-6">
                        Fill in your details to receive a free certificate upon course completion.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium">Full Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300 text-gray-900" 
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Email Address</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300 text-gray-900" 
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Subject</label>
                            <input 
                                type="text" 
                                name="subject" 
                                value={formData.subject} 
                                onChange={handleChange} 
                                className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300 text-gray-900" 
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Message</label>
                            <textarea 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300 h-28 text-gray-900" 
                                required 
                            />
                        </div>
                        <motion.button 
                            type="submit" 
                            className="w-full bg-white text-indigo-600 font-bold py-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            Apply Now
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

export default ApplyCertification;
