import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-600">
        <div>
          <div className="font-semibold text-gray-800">MS Instruments</div>
          <p className="mt-2">© 2024 MS Instruments. All rights reserved.</p>
        </div>

        <div>
          <div className="font-semibold text-gray-800">Products</div>
          <ul className="mt-2 space-y-1">
            <li>Digital Calipers</li>
            <li>Optical Comparators</li>
            <li>CMMs</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-gray-800">Solutions</div>
          <ul className="mt-2 space-y-1">
            <li>Manufacturing</li>
            <li>R & D</li>
            <li>Quality Control</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-gray-800">Support</div>
          <ul className="mt-2 space-y-1">
            <li>Contact</li>
            <li>Documentation</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
