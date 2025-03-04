import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSuccess(false);
    
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError('All fields are required.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3500/notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), subject: subject.trim(), message: message.trim() }),
      });

      if (!response.ok) throw new Error('Failed to send message.');

      setIsSuccess(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>

        {error && <div className="text-red-500 text-center mb-4" aria-live="polite">{error}</div>}
        {isSuccess && <div className="text-green-500 text-center mb-4" aria-live="polite">Your message has been sent successfully!</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 mt-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full p-3 mt-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter the subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 mt-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-md text-white transition ${loading ? 'bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'}`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;