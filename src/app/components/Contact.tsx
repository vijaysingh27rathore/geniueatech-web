"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-blue-100">
            Have questions or want to start a project? Let’s connect.
          </p>
        </div>
      </section>

      {/* Interactive Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 bg-white shadow-xl rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  className="peer w-full border-b-2 border-gray-300 px-2 pt-4 pb-1 focus:border-blue-600 focus:outline-none"
                  placeholder=" "
                />
                <label className="absolute left-2 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
                  Full Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="peer w-full border-b-2 border-gray-300 px-2 pt-4 pb-1 focus:border-blue-600 focus:outline-none"
                  placeholder=" "
                />
                <label className="absolute left-2 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
                  Email
                </label>
              </div>
            </div>

            {/* Subject */}
            <div className="relative">
              <input
                type="text"
                name="subject"
                required
                className="peer w-full border-b-2 border-gray-300 px-2 pt-4 pb-1 focus:border-blue-600 focus:outline-none"
                placeholder=" "
              />
              <label className="absolute left-2 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
                Subject
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                rows={4}
                required
                className="peer w-full border-b-2 border-gray-300 px-2 pt-4 pb-1 focus:border-blue-600 focus:outline-none resize-none"
                placeholder=" "
              ></textarea>
              <label className="absolute left-2 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
                Message
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* Status Feedback */}
            {status === "success" && (
              <p className="text-green-600 text-center">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center">❌ Failed to send. Try again later.</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
