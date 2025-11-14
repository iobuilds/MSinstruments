import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">About MS Instruments</h1>

        {/* Our Story */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 1985, MS Instruments began as a small workshop dedicated
            to crafting precision measuring tools. Over the years, we've grown
            into a leading provider of innovative solutions for various
            industries, driven by our commitment to quality and customer
            satisfaction.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To empower professionals with reliable and accurate measuring
            instruments, enabling them to achieve excellence in their work and
            contribute to advancements in their respective fields.
          </p>
        </section>

        {/* Values */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Our Values</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Integrity:</strong> We uphold the highest ethical standards
            in all our operations. <br />
            <strong>Innovation:</strong> We continuously seek new and improved
            ways to serve our customers. <br />
            <strong>Quality:</strong> We are committed to delivering products
            that meet the highest standards of accuracy and reliability. <br />
            <strong>Customer Focus:</strong> We prioritize our customers' needs
            and strive to exceed their expectations.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6">Meet Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Member 1 */}
            <div>
              <img
                src="https://i.pravatar.cc/200?img=12"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
              />
              <h3 className="font-semibold">Ethan Carter</h3>
              <p className="text-gray-500 text-sm">CEO</p>
            </div>

            {/* Member 2 */}
            <div>
              <img
                src="https://i.pravatar.cc/200?img=47"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
              />
              <h3 className="font-semibold">Sophia Bennett</h3>
              <p className="text-gray-500 text-sm">Head of Engineering</p>
            </div>

            {/* Member 3 */}
            <div>
              <img
                src="https://i.pravatar.cc/200?img=33"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
              />
              <h3 className="font-semibold">Liam Harper</h3>
              <p className="text-gray-500 text-sm">Sales Director</p>
            </div>

            {/* Member 4 */}
            <div>
              <img
                src="https://i.pravatar.cc/200?img=56"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
              />
              <h3 className="font-semibold">Olivia Foster</h3>
              <p className="text-gray-500 text-sm">
                Customer Support Manager
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
