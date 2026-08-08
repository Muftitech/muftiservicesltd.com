export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            About Mufti Services Limited
          </h2>

          <p className="text-gray-700 leading-8 mb-5">
            Mufti Services Limited is a leading technology and innovation
            company committed to delivering digital transformation,
            software development, fintech solutions, ICT consulting,
            youth empowerment and capacity-building programmes.
          </p>

          <p className="text-gray-700 leading-8 mb-5">
            We work with government institutions, NGOs, development
            partners and private organizations to design and implement
            impactful technology solutions that improve lives and support
            sustainable development.
          </p>

          <button className="mt-4 bg-green-700 text-white px-8 py-3 rounded-xl hover:bg-green-800">
            Learn More
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10">
          <h3 className="text-2xl font-bold text-blue-700 mb-6">
            Our Core Values
          </h3>

          <ul className="space-y-4 text-gray-700">
            <li>✅ Innovation</li>
            <li>✅ Excellence</li>
            <li>✅ Integrity</li>
            <li>✅ Professionalism</li>
            <li>✅ Collaboration</li>
            <li>✅ Sustainable Development</li>
          </ul>
        </div>

      </div>
    </section>
  );
}