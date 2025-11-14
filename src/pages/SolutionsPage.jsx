import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Our Solutions</h1>
        <p className="text-gray-600 mb-10 max-w-3xl">
          MS Instruments provides advanced measurement and testing solutions 
          to support professionals across multiple industries. Explore our 
          range of systems built for accuracy, reliability, and innovation.
        </p>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Solution Card */}
          {[
            {
              title: "Precision Measuring Tools",
              desc: "High-accuracy tools for industrial and laboratory applications.",
            },
            {
              title: "Automation & Control Systems",
              desc: "Improve workflow and reduce human error with smart automation.",
            },
            {
              title: "Calibration Services",
              desc: "Certified calibration for all measurement instruments.",
            },
            {
              title: "Custom Instrument Design",
              desc: "Tailored solutions built to meet your specific technical needs.",
            },
            {
              title: "Data Logging & Monitoring",
              desc: "Track performance, collect data, and analyze trends.",
            },
            {
              title: "Quality Assurance Systems",
              desc: "Complete QA systems to maintain international standards.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
