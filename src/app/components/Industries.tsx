"use client";

import Link from "next/link";

export default function IndustriesPage() {
  const industries = [
    {
      icon: "🏥",
      title: "Healthcare (Human)",
      description:
        "Building digital health solutions for hospitals, clinics, and healthcare providers to enhance patient care and streamline medical workflows.",
    },
    {
      icon: "🐾",
      title: "Healthcare (Pet)",
      description:
        "Developing solutions for veterinary clinics, pet wellness apps, and platforms that connect pet owners with quality healthcare services.",
    },
    {
      icon: "🏗️",
      title: "Construction",
      description:
        "Supporting builders and contractors with digital tools for project management, safety monitoring, and real-time collaboration on construction sites.",
    },
    {
      icon: "📐",
      title: "Architecture",
      description:
        "Providing digital solutions for architects to create, visualize, and manage building plans with precision and efficiency.",
    },
    {
      icon: "🛋️",
      title: "Interior Design",
      description:
        "Delivering platforms and applications for interior designers to showcase ideas, manage projects, and bring creative visions to life.",
    },
    {
      icon: "🚚",
      title: "Transport & Logistics",
      description:
        "Digital platforms for fleet management, route optimization, real-time tracking, and improving logistics efficiency.",
    },
    {
      icon: "🛒",
      title: "E-Commerce",
      description:
        "Building scalable e-commerce platforms, online marketplaces, and digital retail solutions to boost online sales.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-lg text-blue-100">
            We empower diverse industries with technology solutions tailored to their unique needs.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Build Digital Solutions for Your Industry
        </h2>
        <p className="mb-6 text-lg text-blue-100">
          Whether you’re in healthcare, construction, transport, or e-commerce —
          we have the expertise to deliver future-ready solutions.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}
