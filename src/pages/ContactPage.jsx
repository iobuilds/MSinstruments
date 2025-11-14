import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          We're here to help. Reach out to us with any questions or inquiries.
        </p>

        {/* Contact Form */}
        <form className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border rounded p-2" />
          <input type="email" placeholder="Your Email" className="w-full border rounded p-2" />
          <input type="text" placeholder="Subject" className="w-full border rounded p-2" />
          <textarea placeholder="Message" rows="4" className="w-full border rounded p-2"></textarea>
          <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded-md">
            Send Message
          </button>
        </form>

        {/* Location Info */}
        <section className="mt-10">
          <h3 className="text-xl font-bold mb-3">Our Location</h3>
          <p className="text-gray-600 mb-4">Visit us at our office or contact us via phone or email.</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Address:</strong> 123 Measurement Avenue, Techville, CA 90210</li>
            <li><strong>Phone:</strong> +1 (555) 123-4567</li>
            <li><strong>Email:</strong> info@msinstruments.us</li>
          </ul>

          {/* Map */}
          <div className="mt-6 rounded-lg overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps?q=london&output=embed"
              className="w-full h-80 border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
