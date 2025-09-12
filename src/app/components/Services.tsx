"use client";

import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: "💻",
      title: "Software Development",
      description:
        "We build high-performing, scalable, and secure applications tailored to your business.",
      points: [
        "Custom Web Applications",
        "Cross-Platform Mobile Apps",
        "API Development & Integration",
        "Enterprise Software Solutions",
      ],
    },
    {
      icon: "☁️",
      title: "Cloud & Infrastructure",
      description:
        "Modernize your IT landscape with cloud solutions that enable flexibility and efficiency.",
      points: [
        "Cloud Migration (AWS, Azure, GCP)",
        "DevOps & Automation (CI/CD)",
        "Infrastructure Management",
        "Disaster Recovery Solutions",
      ],
    },
    {
      icon: "🤖",
      title: "AI & Data Solutions",
      description:
        "Transform your data into insights with AI, Machine Learning, and analytics solutions.",
      points: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Business Intelligence Dashboards",
      ],
    },
    {
      icon: "🛡️",
      title: "Cybersecurity",
      description:
        "Safeguard your digital assets with proactive cybersecurity strategies and solutions.",
      points: [
        "Security Audits & Risk Assessment",
        "Penetration Testing",
        "Identity & Access Management",
        "Compliance (ISO, GDPR, HIPAA)",
      ],
    },
    {
      icon: "🧩",
      title: "IT Consulting",
      description:
        "Strategic consulting to align IT with your business goals and digital transformation journey.",
      points: [
        "Technology Strategy & Roadmaps",
        "Legacy System Modernization",
        "IT Compliance & Risk Management",
        "Business Process Automation",
      ],
    },
    {
      icon: "🔗",
      title: "Blockchain & Emerging Tech",
      description:
        "Leverage future-ready solutions to stay ahead of the innovation curve.",
      points: [
        "Blockchain Development",
        "Smart Contracts & DApps",
        "IoT & Edge Computing",
        "AR/VR Solutions",
      ],
    },
  ];

  const processSteps = [
    { step: "1", title: "Discover", text: "We collaborate to understand your vision, goals, and challenges." },
    { step: "2", title: "Design", text: "Our team creates a user-focused design and technical architecture." },
    { step: "3", title: "Develop", text: "Agile development to build scalable and secure solutions." },
    { step: "4", title: "Deploy", text: "Seamless deployment with DevOps and cloud best practices." },
    { step: "5", title: "Support", text: "Ongoing maintenance, monitoring, and optimization." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-blue-100">
            From custom software to cloud, AI, and cybersecurity — we deliver
            solutions that help businesses innovate, scale, and succeed.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Comprehensive IT Solutions</h2>
          <p className="text-gray-600 text-lg">
            At <span className="text-blue-600 font-semibold">Geniuea Tech</span>,
            we provide end-to-end IT services covering software engineering,
            cloud, data, security, and consulting. Whether you&apos;re a startup or an
            enterprise, we align technology with your goals.
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-8 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Process</h2>
          <div className="grid gap-8 md:grid-cols-5">
            {processSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Build the Future of Technology Together
        </h2>
        <p className="mb-6 text-lg text-blue-100">
          Partner with us to accelerate your digital transformation journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            View Our Work
          </Link>
        </div>
      </section>
    </>
  );
}
