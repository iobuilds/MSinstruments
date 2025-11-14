import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-sm bg-black flex items-center justify-center text-white font-bold">
            MS
          </div>
          <span className="font-semibold">MS Instruments</span>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:underline" href="/products">Products</a>
          <a className="hover:underline" href="#solutions">Solutions</a>
          <a className="hover:underline" href="#support">Support</a>
          <a className="hover:underline" href="/about">About Us</a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-block px-4 py-2 border rounded-md">
            Contact Us
          </button>
          <button className="px-4 py-2 bg-sky-500 text-white rounded-md shadow">
            Request a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
