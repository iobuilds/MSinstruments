import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProductsPage() {
  const products = [
    { name: "Precision Multimeter", desc: "High-accuracy multimeter for electrical measurements", img: "/images/product-1.jpg" },
    { name: "Digital Caliper", desc: "Digital caliper for precise length measurements", img: "/images/product-2.jpg" },
    { name: "Infrared Thermometer", desc: "Non-contact temperature measurement device", img: "/images/product-3.jpg" },
    { name: "Laser Distance Meter", desc: "Laser-based distance measurement tool", img: "/images/product-4.jpg" },
    { name: "Oscilloscope", desc: "Electronic test instrument for waveform analysis", img: "/images/product-5.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">All Instruments</h1>
        <p className="text-gray-600 mb-8">Explore our comprehensive range of measuring instruments designed for precision and reliability across industries.</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          {["Category", "Accuracy", "Range", "Brand"].map((filter) => (
            <button key={filter} className="border rounded-md px-4 py-1 bg-white text-gray-700 hover:bg-gray-100">
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item, i) => (
            <div key={i} className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} className={`px-3 py-1 rounded ${n === 1 ? "bg-sky-500 text-white" : "bg-white border"}`}>
              {n}
            </button>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
