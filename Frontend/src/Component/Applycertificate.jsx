import { useState } from "react";
import axios from "axios";

function Applycertification() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

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
        <div className="h-auto p-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg max-w-lg mx-auto mt-10 text-white">
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
                <button 
                    type="submit" 
                    className="w-full bg-white text-indigo-600 font-bold py-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
                    Apply Now
                </button>
            </form>
        </div>
    );
}

export default Applycertification;