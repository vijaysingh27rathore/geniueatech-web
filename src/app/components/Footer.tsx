"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Geniuea Tech</h2>
          <p className="text-gray-400 text-sm">
            End-to-End Software Solutions for Web, Mobile, Cloud & Beyond.
            We help businesses innovate and scale in the digital age.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link href="/#services" className="hover:text-blue-400">Trends</Link></li>
            <li><Link href="/portfolio" className="hover:text-blue-400">Portfolio</Link></li>
            <li><Link href="/careers" className="hover:text-blue-400">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-gray-400">📍 Pune, India</p>
          <p className="text-gray-400">📧 sales@geniueatech.com</p>
          <p className="text-gray-400">📞 +91 81498 23037</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">🔗</a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">🐦</a>
            <a href="#" aria-label="GitHub" className="hover:text-blue-400">💻</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Geniuea Tech. All rights reserved.
      </div>
    </footer>
  );
}
