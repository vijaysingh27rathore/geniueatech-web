"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Trends from "./components/Trends";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
  id="home"
  className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white relative pt-16"
  style={{
    backgroundImage:
      "url('https://img1.wsimg.com/isteam/getty/2161678259/:/rs=w:1279,m')",
  }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl px-6 animate-fadeIn">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideUp">
      End-to-End Software Solutions for Web, Mobile, Cloud & Beyond
    </h1>
    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 animate-slideUp delay-200">
      We design, develop, and deliver powerful digital solutions —
      from responsive web apps to enterprise-grade cloud services —
      helping businesses grow in today’s digital world.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp delay-500">
      <Link
        href="/services"
        className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
      >
        Our Services
      </Link>
      <Link
        href="/contact"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition transform hover:scale-105"
      >
        Contact Us
      </Link>
    </div>
  </div>

  {/* Scroll Down Indicator
  <div className="absolute bottom-10 text-white text-2xl animate-bounce">
    ⬇️
  </div> */}
</section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              At <span className="text-blue-600 font-semibold">Geniuea Tech</span>,
              we specialize in delivering innovative solutions across web, mobile,
              and cloud platforms. Our mission is to empower businesses with
              scalable, future-ready technologies.
            </p>
            <Link
              href="/about"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
          </div>
          <div>
            <Image
  src="/about-img.jpg"
  alt="About us"
  width={800}
  height={600}
  className="rounded-2xl shadow-lg"
/>
          </div>
        </div>
      </section>

      {/* Services Section */}
<section id="services" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Our Services
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We partner with businesses to design, build, and scale
        technology solutions that drive innovation and growth.
      </p>
    </div>

    {/* Services Timeline */}
    <div className="space-y-12 relative">
      {/* Vertical Line */}
      <div className="absolute left-8 top-0 h-full w-1 bg-blue-100 hidden md:block"></div>

      {/* Service Item */}
      <div className="relative md:flex items-start gap-8 group">
        <div className="flex-shrink-0">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-3xl group-hover:scale-110 transition">
            💻
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition md:w-4/5">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Software Development
          </h3>
          <p className="text-gray-600 text-sm">
            Custom-built applications for web, mobile, and enterprise systems
            — secure, scalable, and tailored to your needs.
          </p>
        </div>
      </div>

      <div className="relative md:flex items-start gap-8 md:flex-row-reverse group">
        <div className="flex-shrink-0 md:order-2">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-3xl group-hover:scale-110 transition">
            ☁️
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition md:w-4/5">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Cloud & Infrastructure
          </h3>
          <p className="text-gray-600 text-sm">
            Cloud migration, DevOps automation, and IT infrastructure solutions
            that boost agility and performance.
          </p>
        </div>
      </div>

      <div className="relative md:flex items-start gap-8 group">
        <div className="flex-shrink-0">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-purple-100 text-3xl group-hover:scale-110 transition">
            🧩
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition md:w-4/5">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            IT Consulting
          </h3>
          <p className="text-gray-600 text-sm">
            Strategic IT advisory, digital transformation guidance, and
            technology roadmaps to align with your goals.
          </p>
        </div>
      </div>

      <div className="relative md:flex items-start gap-8 md:flex-row-reverse group">
        <div className="flex-shrink-0 md:order-2">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-100 text-3xl group-hover:scale-110 transition">
            🛡️
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition md:w-4/5">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Cybersecurity
          </h3>
          <p className="text-gray-600 text-sm">
            End-to-end cybersecurity solutions — audits, penetration
            testing, and compliance support to protect your assets.
          </p>
        </div>
      </div>

      <div className="relative md:flex items-start gap-8 group">
        <div className="flex-shrink-0">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-yellow-100 text-3xl group-hover:scale-110 transition">
            🤖
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition md:w-4/5">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            AI & Data Solutions
          </h3>
          <p className="text-gray-600 text-sm">
            AI, Machine Learning, and data-driven insights to empower
            smarter business decisions and innovation.
          </p>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <a
        href="/services"
        className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Explore More Services
      </a>
    </div>
  </div>
</section>




      {/* Trends Section */}
      <Trends />

      {/* Call to Action */}
<section className="relative py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white overflow-hidden">
  {/* Decorative background shapes */}
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_#fff,_transparent_50%)]"></div>
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_#000,_transparent_50%)]"></div>

  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Let’s Build <span className="text-yellow-300">Something Amazing</span> Together 🚀
    </h2>
    <p className="mb-8 text-lg text-blue-100">
      Whether you need a scalable application, cloud solution, or a complete digital transformation — 
      our team is here to turn your vision into reality.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="/contact"
        className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
      >
        Get in Touch
      </Link>
      <Link
        href="/services"
        className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition"
      >
        Explore Services
      </Link>
    </div>
  </div>
</section>


      <Footer />
    </>
  );
}
