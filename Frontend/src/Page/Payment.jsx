import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const course = location.state?.course;

  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardType, setCardType] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !cardNumber || !expiryDate || !cvv || !cardType) {
      setError('All fields are required');
      return;
    }

    // Logic to process the payment (e.g., API call to payment gateway)
    console.log('Payment processed', { name, cardNumber, expiryDate, cvv, cardType });
    setIsSuccess(true); // Simulate a successful payment
    setError('');
  };

  const formatCardNumber = (number) => {
    // Remove non-digit characters and limit to 16 digits
    const cleaned = number.replace(/\D/g, '').slice(0, 16);
    // Format it into groups of 4 digits
    return cleaned.replace(/(\d{4})(?=\d)/g, '$1-');
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 shadow-lg rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left side (Image) */}
        <div className="flex justify-center items-center mt-50 h-50 w-110">
          <img
            src="/payment.png"
            alt="Course"
            className="rounded-lg"
          />
        </div>

        {/* Right side (Payment Form) */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800">Buy Your Course</h1>

          <div>
            <h2 className="text-xl text-gray-700 font-medium">Course: {course.title}</h2>
            <p className="text-xl">Instructor: {course.teacher}</p>
            <br />
            <p className="text-xl">Price: {course.price}</p>
          </div>

          {error && <div className="text-red-600">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-5">
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
              <label htmlFor="cardNumber" className="text-sm text-gray-700">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                className="w-full p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your card number"
                value={cardNumber}
                onChange={(e) => {
                  // Format the card number and set it
                  const formattedCardNumber = formatCardNumber(e.target.value);
                  setCardNumber(formattedCardNumber);
                }}
                required
                maxLength={19} // Max length considering the hyphens
              />
            </div>

            <div>
              <label htmlFor="cardType" className="text-sm text-gray-700">Card Type</label>
              <select
                id="cardType"
                className="w-full p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={cardType}
                onChange={(e) => setCardType(e.target.value)}
                required
              >
                <option value="">Select Card Type</option>
                <option value="visa">Visa</option>
                <option value="mastercard">MasterCard</option>
                <option value="amex">American Express</option>
              </select>
            </div>

            <div className="flex justify-between space-x-4">
              <div className="w-1/2">
                <label htmlFor="expiryDate" className="text-sm text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  className="w-full p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value.replace(/[^0-9]/g, ''))}
                  maxLength={4}
                  required
                />
              </div>

              <div className="w-1/2">
                <label htmlFor="cvv" className="text-sm text-gray-700">CVV</label>
                <input
                  type="number"
                  id="cvv"
                  className="w-full p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter CVV"
                  value={cvv}
                  onChange={(e) => {
                    // Allow only numbers and ensure the length doesn't exceed 3 digits
                    const value = e.target.value;
                    if (/^\d{0,3}$/.test(value)) {
                      setCvv(value);
                    }
                  }}
                  required
                  maxLength={3}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Complete Payment
            </button>
          </form>

          {isSuccess && (
            <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-md">
              Payment Successful! Your course is now available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
