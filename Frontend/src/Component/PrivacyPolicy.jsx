import React from "react";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-4">
          At ArrayLogic Software Pvt. Ltd., we respect your privacy and are
          committed to protecting your personal data. This policy outlines how
          we collect, use, and safeguard your information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
        <p className="text-gray-300">
          We may collect personal information such as your name, email address,
          phone number, and payment details when you register, subscribe, or
          use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
        <p className="text-gray-300">
          We use your information to provide, improve, and secure our services.
          This includes sending updates, responding to inquiries, and ensuring
          compliance with legal requirements.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Data Security</h2>
        <p className="text-gray-300">
          We implement strong security measures to protect your personal
          information from unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Cookies and Tracking</h2>
        <p className="text-gray-300">
          We use cookies to enhance your browsing experience. You can choose to
          disable cookies in your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Changes to This Policy</h2>
        <p className="text-gray-300">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Contact Us</h2>
        <p className="text-gray-300">
          If you have any questions about this Privacy Policy, please contact
          us at: <a href="mailto:support@arraylogic.com" className="text-blue-400">support@arraylogic.com</a>
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;