"use client";
import Image from "next/image";

import { useState } from "react";
import Link from "next/link";

export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Pune, India",
      description:
        "Build modern and responsive web applications using React, Next.js, and Tailwind CSS.",
    },
    {
      title: "Backend Developer",
      type: "Full-time",
      location: "Remote",
      description:
        "Design and implement robust backend systems using Node.js, Express, and cloud services.",
    },
    {
      title: "UI/UX Designer",
      type: "Internship",
      location: "Hybrid",
      description:
        "Work with our design team to create intuitive and engaging user experiences.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg text-blue-100">
            Be part of a passionate team that builds innovative digital
            solutions for businesses worldwide.
          </p>
        </div>
      </section>

      {/* Career Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Grow With Us 🚀
            </h2>
            <p className="text-gray-600 mb-6">
              At <span className="text-blue-600 font-semibold">Geniuea Tech</span>, 
              we believe in empowering people as much as we empower businesses.  
              Join our journey to create meaningful digital solutions, learn new 
              skills, and build a career that inspires you every day.
            </p>
            <Link
              href="#open-positions"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Open Positions
            </Link>
          </div>
          <div>
            <Image
  src="/career-img.jpg"
  alt="Career Growth"
  width={800}
  height={600}
  className="rounded-2xl shadow-lg"
/>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Open Positions
          </h2>
          <div className="space-y-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">
                  {job.type} • {job.location}
                </p>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <button
                  onClick={() => {
                    setSelectedJob(job.title);
                    setIsModalOpen(true);
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Can’t Find the Right Role?
        </h2>
        <p className="mb-6 text-lg text-blue-100">
          We’re always looking for talented people. Reach out and let’s connect!
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Get in Touch
        </Link>
      </section>

      {/* Apply Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Apply for {selectedJob}
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Resume Link</label>
                <input
                  type="url"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://your-resume-link.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Why are you a good fit?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
