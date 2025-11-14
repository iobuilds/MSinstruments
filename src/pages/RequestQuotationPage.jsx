import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RequestQuotationPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Request a Quotation</h1>
        <p className="text-gray-600 mb-8">
          Fill out the form below and our team will get back to you with a detailed quotation.
        </p>

        {/* Quotation Form */}
        <form className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded p-2"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded p-2"
          />

          <input
            type="text"
            placeholder="Company Name (Optional)"
            className="w-full border rounded p-2"
          />

          <input
            type="text"
            placeholder="Product / Solution Required"
            className="w-full border rounded p-2"
          />

          <textarea
            placeholder="Project Details / Additional Notes"
            rows="4"
            className="w-full border rounded p-2"
          ></textarea>

          <button
            type="submit"
            className="bg-sky-500 text-white px-4 py-2 rounded-md"
          >
            Submit Request
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
