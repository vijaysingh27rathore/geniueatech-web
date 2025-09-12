"use client";

export default function Trends() {
  return (
    <section id="trends" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          We work with trending technologies
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI/ML */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="text-blue-600 text-5xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">AI / ML</h3>
            <p className="text-gray-600">
              Harnessing Artificial Intelligence and Machine Learning to build smart,
              data-driven applications for the future.
            </p>
          </div>

          {/* Cybersecurity */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="text-red-600 text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Cybersecurity</h3>
            <p className="text-gray-600">
              Implementing robust security practices to safeguard digital assets
              against ever-evolving cyber threats.
            </p>
          </div>

          {/* Cloud */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="text-green-600 text-5xl mb-4">☁️</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Cloud</h3>
            <p className="text-gray-600">
              Delivering scalable, reliable, and secure cloud solutions with AWS,
              Azure, and Google Cloud. Leveraging Cloud Computing & Edge Computing
              to power business growth.
            </p>
          </div>

          {/* Blockchain */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="text-purple-600 text-5xl mb-4">⛓️</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Blockchain</h3>
            <p className="text-gray-600">
              Building decentralized applications, smart contracts, and secure
              transaction systems with blockchain technology.
            </p>
          </div>

          {/* Quantum Computing */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="text-indigo-600 text-5xl mb-4">⚛️</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Quantum Computing</h3>
            <p className="text-gray-600">
              Exploring next-gen computing power for cryptography, simulations,
              and solving complex problems beyond classical systems.
            </p>
          </div>

          {/* DevOps, MLOps & AIOps */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="text-yellow-600 text-5xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              DevOps, MLOps & AIOps
            </h3>
            <p className="text-gray-600">
              Streamlining development and operations with automation, CI/CD,
              and AI-driven workflows for better reliability and scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
