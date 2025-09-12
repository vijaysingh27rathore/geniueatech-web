"use client";

import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    {
      image: "https://acropolium.com/img/articles/healthcare-management-system-development/img01.jpg",
      title: "Healthcare Management System",
      industry: "Healthcare (Human)",
      description:
        "A digital platform to streamline patient records, telemedicine, and hospital workflows.",
    },
    {
      image: "https://www.shutterstock.com/image-photo/happy-man-vet-doctor-blue-260nw-2498245253.jpg",
      title: "Pet Care & Wellness App",
      industry: "Healthcare (Pet)",
      description:
        "A mobile app for pet owners to book vet appointments, track vaccinations, and manage pet health.",
    },
    {
      image: "https://www.shutterstock.com/image-photo/smart-construction-project-management-system-600nw-2378840243.jpg",
      title: "Smart Construction Dashboard",
      industry: "Construction",
      description:
        "A web platform for builders to track projects, budgets, and safety compliance in real time.",
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      title: "Architectural 3D Visualization",
      industry: "Architecture",
      description:
        "An immersive visualization tool for architects to showcase 3D models of building designs.",
    },
    {
      image: "https://d1zruf9db62p8s.cloudfront.net/2025/08/best-ecommerce-platform-for-clothing-store-768x404.webp",
      title: "E-Commerce Fashion Platform",
      industry: "E-Commerce",
      description:
        "A scalable e-commerce solution for fashion retailers with AI-driven recommendations.",
    },
    {
      image: "https://www.jdinstitute.edu.in/media/2021/05/How-to-create-an-influential-interior-design-portfolio-1.jpg",
      title: "Interior Design Collaboration Tool",
      industry: "Interior Design",
      description:
        "A platform for interior designers to share concepts, collaborate, and manage client projects.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Portfolio & Case Studies
          </h1>
          <p className="text-lg text-blue-100">
            Explore how we’ve helped businesses across industries with digital
            solutions that deliver results.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {project.industry}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                {/* <Link
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="mb-6 text-lg text-blue-100">
          Let’s create innovative digital solutions tailored to your business.
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
