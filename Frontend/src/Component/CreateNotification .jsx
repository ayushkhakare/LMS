import { useState } from "react";
import axios from "axios";

const CreateNotification = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3500/notification", formData);
      alert("Notification created successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error creating notification:", error.message);
    }
  };

  return (
    <div className="h-180 max-w-full mx-auto p-8 bg-gradient-to-r from-[#0d1721] to-[#1a2940] shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
      {/* Information Section */}
      <div className="flex flex-col justify-center px-8">
        <h2 className="text-3xl font-extrabold mb-4 text-indigo-300">💡 Freely Ask Us!</h2>
        <p className="text-lg leading-relaxed opacity-80">
          I am here to help you with <span className="font-bold text-indigo-400">learning, placements, and career opportunities</span>—all <span className="text-green-400">free of cost!</span>  
          Book a <span className="font-semibold text-indigo-400">one-on-one consultation</span> with our expert teachers and get personalized guidance.
        </p>
        <button
  onClick={() => window.open("https://zoom.us/join", "_blank")}
  className=" mt-12 bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-full font-bold text-sm shadow-md transition duration-300"
>
  🎥 Connect on Zoom
</button>

      </div>

      {/* Form Section */}
      <div className="px-8 py-6 bg-opacity-90 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-300">📩 Directly Ask Us</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-full text-white p-3 bg-transparent border-b border-indigo-400 focus:ring-indigo-300 outline-none text-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="w-full text-white p-3 bg-transparent border-b border-indigo-400 focus:ring-indigo-300 outline-none text-lg"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter Subject"
            className="w-full text-white p-3 bg-transparent border-b border-indigo-400 focus:ring-indigo-300 outline-none text-lg"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Your Message"
            className="w-full text-white p-3 bg-transparent border-b border-indigo-400 focus:ring-indigo-300 outline-none text-lg"
            rows="4"
            required
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-20 rounded-full font-bold text-sm shadow-md transition duration-300"
            >
              📤 Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNotification;
