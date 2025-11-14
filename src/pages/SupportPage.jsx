import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Support</h1>
        <p className="text-gray-600 mb-10">
          We're here to assist you with product information, troubleshooting, 
          documentation, and service inquiries.
        </p>

        {/* Support Blocks */}
        <div className="space-y-8">
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Product Support</h2>
            <p className="text-gray-600">
              Get help with installation, manuals, specifications, and product usage.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Technical Assistance</h2>
            <p className="text-gray-600">
              Our engineering team can assist with technical questions, 
              troubleshooting, and configuration.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Repair & Service</h2>
            <p className="text-gray-600">
              We provide repair, calibration, and maintenance services to ensure 
              accuracy and long-term reliability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
            <ul className="text-gray-600 text-sm space-y-1">
              <li><strong>Email:</strong> support@msinstruments.us</li>
              <li><strong>Phone:</strong> +1 (555) 321-9876</li>
              <li><strong>Working Hours:</strong> Mon–Fri, 9AM – 5PM</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
