import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProductDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Precision Calipers</h1>
        <p className="text-gray-600 mb-6">High-accuracy calipers for precise measurements in various applications.</p>

        {/* Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <img src="/images/product-detail-1.jpg" className="rounded-lg" alt="Precision Caliper" />
          <img src="/images/product-detail-2.jpg" className="rounded-lg" alt="Precision Caliper" />
          <img src="/images/product-detail-3.jpg" className="rounded-lg" alt="Precision Caliper" />
        </div>

        {/* Specifications */}
        <h2 className="text-2xl font-bold mb-4">Specifications</h2>
        <table className="w-full text-left text-sm border">
          <tbody>
            {[
              ["Measuring Range", "0–150 mm"],
              ["Accuracy", "±0.02 mm"],
              ["Material", "Stainless Steel"],
              ["Display Type", "LCD"],
              ["Power Source", "CR2032 Battery"],
              ["Operating Temp", "0°C–40°C"],
              ["Storage Temp", "-20°C–60°C"],
              ["IP Rating", "IP54"],
              ["Warranty", "1 year"],
            ].map(([k, v], i) => (
              <tr key={i} className="border-t">
                <td className="p-2 font-medium">{k}</td>
                <td className="p-2">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Features & Benefits */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Features</h3>
          <p className="text-gray-600">
            Our precision calipers are designed for accuracy and durability with a high-contrast LCD display and stainless steel construction.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Benefits</h3>
          <p className="text-gray-600">
            These calipers offer reliable and precise measurements, reducing errors and improving efficiency in manufacturing and R&D.
          </p>
        </section>

        {/* Related Products */}
        <section className="mt-10">
          <h3 className="text-xl font-bold mb-4">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "Digital Micrometer", img: "/images/product-1.jpg" },
              { name: "Height Gauge", img: "/images/product-2.jpg" },
              { name: "Angle Finder", img: "/images/product-3.jpg" },
            ].map((p, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <img src={p.img} className="rounded-md mb-3 h-32 w-full object-cover" alt={p.name} />
                <h4 className="font-medium text-gray-700">{p.name}</h4>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
