export default function Statistics() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-700 mb-4">
          Our Impact in Numbers
        </h2>

        <p className="text-center text-gray-600 mb-14 max-w-3xl mx-auto">
          We are committed to delivering measurable results through
          technology, innovation, youth empowerment and strategic partnerships.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <h3 className="text-5xl font-bold text-green-700">500+</h3>
            <p className="mt-4 font-semibold text-gray-600">
              Youths Empowered
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <h3 className="text-5xl font-bold text-blue-700">100+</h3>
            <p className="mt-4 font-semibold text-gray-600">
              Successful Projects
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <h3 className="text-5xl font-bold text-green-700">50+</h3>
            <p className="mt-4 font-semibold text-gray-600">
              Government & NGO Partners
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <h3 className="text-5xl font-bold text-blue-700">98%</h3>
            <p className="mt-4 font-semibold text-gray-600">
              Client Satisfaction
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}