import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import QRCode from "react-qr-code";

function Payment() {
  const location = useLocation();
  const course = location.state?.course;

  const [name, setName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Get user ID from localStorage
  const userData = JSON.parse(localStorage.getItem("user")); 
  const userId = userData?._id;

  // Calculate total price with ₹5 GST
  const totalPrice = course ? parseFloat(course.price) + 5 : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      setError("User not found. Please log in again.");
      return;
    }

    if (!name) {
      setError("Name is required");
      return;
    }

    if (paymentMethod === "card") {
      if (!cardNumber || !expiryDate || !cvv) {
        setError("All card details are required");
        return;
      }
    }

    // Prepare purchase data
    const purchaseData = {
      userId: userId,
      userName: name,  // ✅ Ensure it's coming from input
      courseId: course?._id,
      courseName: course?.title,  // ✅ Ensure it's from state
      price: totalPrice,
      purchaseDate: new Date(),
      status: "completed",
    };

    console.log("Sending purchase data:", purchaseData); // ✅ Debugging step

    try {
      const response = await fetch("http://localhost:3500/purchases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(purchaseData),
      });

      if (!response.ok) {
        throw new Error("Failed to save purchase data");
      }

      const data = await response.json();
      console.log("Purchase Successful:", data);
      setIsSuccess(true);
      setError("");
    } catch (error) {
      console.error("Error saving purchase:", error);
      setError("Error occurred while saving purchase");
    }
};


  return (
    <section className="bg-gray-900">
      <div className="max-w-4xl mx-auto p-8 shadow-lg rounded-lg bg-gray-900 text-white h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <img src="/payment.png" alt="Course" className="rounded-lg" />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-3xl font-semibold">Buy Your Course</h1>
            <h2 className="text-xl font-medium">Course: {course?.title}</h2>
            <p className="text-xl">Instructor: {course?.teacher}</p>
            <p className="text-xl">Total Price: ₹{totalPrice} (incl. ₹5 GST)</p>

            {error && <div className="text-red-400">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name Input */}
              <div>
                <label className="text-sm">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 mt-2 rounded-md border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Payment Method Dropdown */}
              <div>
                <label className="text-sm">Payment Method</label>
                <select
                  className="w-full p-3 mt-2 rounded-md border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="card">Card Payment</option>
                  <option value="qr">QR Code Payment</option>
                </select>
              </div>

              {/* QR Code Payment Section */}
              {paymentMethod === "qr" && (
                <div className="flex flex-col items-center border-2 pb-5 pt-3 bg-gray-700">
                  <p className="text-white">Scan to Pay ₹{totalPrice}</p>
                  <QRCode 
                    value={`upi://pay?pa=ayushkhakare2018@oksbi&pn=Ayush%20Khakare&tn=Course%20Payment&am=${totalPrice}&cu=INR`} 
                    size={200} 
                  />
                </div>
              )}

              {/* Card Payment Section */}
              {paymentMethod === "card" && (
                <div className="space-y-4">
                  {/* Card Number */}
                  <div>
                    <label className="text-sm">Card Number</label>
                    <input
                      type="text"
                      className="w-full p-3 mt-2 rounded-md border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500"
                      placeholder="1234 5678 9012 3456"
                      maxLength="16"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      required
                      autoComplete="cc-number"
                    />
                  </div>

                  {/* Expiry Date & CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm">Expiry Date</label>
                      <input
                        type="text"
                        className="w-full p-3 mt-2 rounded-md border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500"
                        placeholder="MM/YY"
                        maxLength="5"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                        autoComplete="cc-exp"
                      />
                    </div>
                    <div>
                      <label className="text-sm">CVV</label>
                      <input
                        type="password"
                        className="w-full p-3 mt-2 rounded-md border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500"
                        placeholder="123"
                        maxLength="3"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
                  >
                    Complete Payment
                  </button>
                </div>
              )}
            </form>

            {/* Success Message */}
            {isSuccess && (
              <div className="mt-6 p-4 bg-green-700 text-white rounded-md">
                Payment Successful! Your course is now available.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
