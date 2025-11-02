import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img src="/images/hero.jpg" alt="factory" className="w-full h-80 object-cover opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-3xl px-8 text-white">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Precision Measurement Solutions for Every Industry
              </h1>
              <p className="mt-4 text-md md:text-lg text-white/90">
                MS Instruments provides cutting-edge measuring instruments and solutions tailored to meet the diverse needs of industries ranging from manufacturing to research and development.
              </p>
              <div className="mt-6">
                <a
                  href="#products"
                  className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md shadow"
                >
                  Explore Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE OFFERINGS */}
      <main className="max-w-7xl mx-auto px-6 pb-12">
        {/* CORE OFFERINGS */}
        <section id="core-offerings" className="mb-10">
          <h2 className="text-2xl font-extrabold">Our Core Offerings</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">
            MS Instruments offers a comprehensive suite of measuring instruments and solutions designed to enhance precision, efficiency, and quality across various applications.
          </p>
          <div className="mt-6">
            <a href="#products" className="inline-block bg-sky-500 text-white px-4 py-2 rounded-md">
              View All Products
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-5 shadow-sm border">
              <div className="text-sm font-semibold">Precision Instruments</div>
              <p className="mt-2 text-sm text-gray-600">
                High-accuracy measuring tools for diverse applications, ensuring reliable and precise measurements.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm border">
              <div className="text-sm font-semibold">Advanced Metrology</div>
              <p className="mt-2 text-sm text-gray-600">
                State-of-the-art metrology systems for complex measurements and quality control processes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm border">
              <div className="text-sm font-semibold">Custom Solutions</div>
              <p className="mt-2 text-sm text-gray-600">
                Tailored measurement solutions to address specific industry challenges and requirements.
              </p>
            </div>
          </div>
        </section>
        {/* FEATURED PRODUCTS */}
        <section id="products" className="mb-12">
        <h3 className="text-xl font-bold mb-4">Featured Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <article className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <img src="/images/product-1.jpg" alt="Digital Calipers" className="w-full h-36 object-cover" />
                    <div className="p-4">
                        <h4 className="font-semibold text-sm">Digital Calipers</h4>
                        <p className="text-xs text-gray-600 mt-2">High-precision digital calipers for accurate linear measurements in various industrial settings.</p>
                    </div>
                </article>
                <article className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <img src="/images/product-2.jpg" alt="Optical Comparators" className="w-full h-36 object-cover" />
                    <div className="p-4">
                        <h4 className="font-semibold text-sm">Optical Comparators</h4>
                        <p className="text-xs text-gray-600 mt-2">Advanced optical comparators for non-contact measurement and inspection of small parts.</p>
                     </div>
                </article>
                <article className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img src="/images/product-3.jpg" alt="CMM" className="w-full h-36 object-cover" />
                <div className="p-4">
                    <h4 className="font-semibold text-sm">Coordinate Measuring Machines</h4>
                    <p className="text-xs text-gray-600 mt-2">Automated coordinate measuring machines for precise 3D measurement and quality control.</p>
                </div>
                </article>
            </div>
        </section>
        {/* INDUSTRY SOLUTIONS */}
        <section id="solutions" className="mb-16">
            <h3 className="text-2xl font-extrabold">Industry Solutions</h3>
            <p className="mt-3 text-gray-600 max-w-3xl">MS Instruments provides specialized measurement solutions for a wide range of industries, ensuring precision and quality in every application.</p>


            <div className="mt-6">
            <a href="#solutions" className="inline-block bg-sky-500 text-white px-4 py-2 rounded-md">Explore Solutions</a>
            </div>


            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img src="/images/industry-1.jpg" alt="Manufacturing" className="w-full h-36 object-cover" />
            <div className="p-4">
            <h5 className="font-semibold">Manufacturing</h5>
            <p className="text-sm text-gray-600 mt-2">Enhance production efficiency and accuracy with our robust measuring instruments and systems.</p>
            </div>
            </div>


            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img src="/images/industry-2.jpg" alt="R&D" className="w-full h-36 object-cover" />
            <div className="p-4">
            <h5 className="font-semibold">Research & Development</h5>
            <p className="text-sm text-gray-600 mt-2">Drive innovation with our advanced metrology tools for precise data collection and analysis.</p>
            </div>
            </div>


            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img src="/images/industry-3.jpg" alt="Quality Control" className="w-full h-36 object-cover" />
            <div className="p-4">
            <h5 className="font-semibold">Quality Control</h5>
            <p className="text-sm text-gray-600 mt-2">Ensure product quality and compliance with our comprehensive inspection and measurement solutions.</p>
            </div>
            </div>
            </div>
        </section>
        {/* CTA */}
        <section className="bg-white rounded-lg p-8 shadow-sm text-center">
            <h4 className="text-xl font-extrabold">Get Started with MS Instruments</h4>
            <p className="mt-2 text-gray-600">Contact us today to discuss your measurement needs and discover how our solutions can benefit your business.</p>
            <div className="mt-6">
            <button className="bg-sky-500 text-white px-4 py-2 rounded-md">Request a Quote</button>
            </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
