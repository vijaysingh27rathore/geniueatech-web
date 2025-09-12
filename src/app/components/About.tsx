"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          About Us
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          At <span className="font-semibold text-blue-600">Geniuea Tech</span>, 
          we deliver end-to-end software solutions that help businesses innovate,
          scale, and thrive in the digital era.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            We specialize in web development, mobile apps, cloud solutions,
            and emerging technologies. Our passionate team of developers,
            designers, and innovators is dedicated to building scalable
            and future-ready digital experiences.
          </p>
          <p className="text-gray-600 mb-4">
            By combining innovation, collaboration, and technical expertise,
            we create solutions that drive measurable business value and help
            our clients stay ahead of the curve.
          </p>
          <p className="text-gray-600">
            Partner with us to transform your ideas into impactful technology solutions.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
  alt="About us"
  width={800}
  height={600}
  className="rounded-2xl shadow-lg"
/>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300">
              <div className="text-blue-600 text-5xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Mission</h3>
              <p className="text-gray-600">
                To empower businesses with cutting-edge technology solutions
                that are innovative, scalable, and impactful.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300">
              <div className="text-green-600 text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Vision</h3>
              <p className="text-gray-600">
                To be a trusted global technology partner driving digital
                transformation for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300 text-center">
            <div className="text-blue-600 text-5xl mb-4">👨‍💻</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Expert Team</h3>
            <p className="text-gray-600">
              Skilled professionals passionate about technology and innovation.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300 text-center">
            <div className="text-yellow-600 text-5xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">End-to-End Solutions</h3>
            <p className="text-gray-600">
              From ideation to deployment, we cover the entire product lifecycle.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300 text-center">
            <div className="text-red-600 text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Client-Centric Approach</h3>
            <p className="text-gray-600">
              We prioritize client goals to deliver real business value.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
