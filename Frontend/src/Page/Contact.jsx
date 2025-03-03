import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !subject || !message) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:3500/notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSuccess(true);
      setError('');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      setError('Failed to send message. Please try again.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-800 text-center">Contact Us</h1>

      {error && <div className="text-red-600 text-center mt-4">{error}</div>}
      {isSuccess && (
        <div className="text-green-600 text-center mt-4">
          Your message has been sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 mt-8">
        <div>
          <label htmlFor="name" className="text-sm text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="text-sm text-gray-700">Subject</label>
          <input
            type="text"
            id="subject"
            className="w-full p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter the subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm text-gray-700">Message</label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
