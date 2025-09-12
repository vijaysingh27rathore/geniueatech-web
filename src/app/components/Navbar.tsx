"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            Geniuea Tech
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
                        <Link href="/" className={`hover:text-blue-600 ${pathname === "/" ? "text-blue-600 font-semibold" : ""}`}>Home</Link>
                        <Link href="/about" className={`hover:text-blue-600 ${pathname === "/about" ? "text-blue-600 font-semibold" : ""}`}>About Us</Link>
                        <Link href="/services" className={`hover:text-blue-600 ${pathname === "/services" ? "text-blue-600 font-semibold" : ""}`}>Services</Link>
                        <Link href="/industries" className={`hover:text-blue-600 ${pathname === "/industries" ? "text-blue-600 font-semibold" : ""}`}>Industries We Serve</Link>
                        <Link href="/portfolio" className={`hover:text-blue-600 ${pathname === "/portfolio" ? "text-blue-600 font-semibold" : ""}`}>Portfolio / Case Studies</Link>
                        <Link href="/careers" className={`hover:text-blue-600 ${pathname === "/careers" ? "text-blue-600 font-semibold" : ""}`}>Careers</Link>
                        <Link href="/contact" className={`hover:text-blue-600 ${pathname === "/contact" ? "text-blue-600 font-semibold" : ""}`}>Contact Us</Link>
                    </nav>


                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Always Rendered, Hidden by Default) */}
            <div className={`md:hidden px-4 pb-4 space-y-2 bg-white shadow-md ${isOpen ? "block" : "hidden"}`}>
                <Link href="/" className={`block hover:text-blue-600 ${pathname === "/" ? "text-blue-600 font-semibold" : ""}`}>Home</Link>
                <Link href="/about" className={`block hover:text-blue-600 ${pathname === "/about" ? "text-blue-600 font-semibold" : ""}`}>About Us</Link>
                <Link href="/services" className={`block hover:text-blue-600 ${pathname === "/services" ? "text-blue-600 font-semibold" : ""}`}>Services</Link>
                <Link href="/industries" className={`block hover:text-blue-600 ${pathname === "/industries" ? "text-blue-600 font-semibold" : ""}`}>Industries We Serve</Link>
                <Link href="/portfolio" className={`block hover:text-blue-600 ${pathname === "/portfolio" ? "text-blue-600 font-semibold" : ""}`}>Portfolio / Case Studies</Link>
                <Link href="/careers" className={`block hover:text-blue-600 ${pathname === "/careers" ? "text-blue-600 font-semibold" : ""}`}>Careers</Link>
                <Link href="/contact" className={`block hover:text-blue-600 ${pathname === "/contact" ? "text-blue-600 font-semibold" : ""}`}>Contact Us</Link>
            </div>
        </header>
    );
}
