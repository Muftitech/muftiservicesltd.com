export default function Services() {
  return (
    <section id="services"className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-700 mb-4">
          Our Professional Services
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          We provide innovative technology solutions, capacity building,
          digital transformation and strategic communication services for
          governments, NGOs, development partners and private organizations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-green-700">ICT Training & Capacity Building</h3>
            <p className="mt-3 text-gray-600">
              Digital skills, AI, Cybersecurity, Data Analysis, Web Development and Digital Marketing.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-green-700">Youth Empowerment Programmes</h3>
            <p className="mt-3 text-gray-600">
              Entrepreneurship, digital innovation, employability and skills acquisition programmes.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-green-700">Government Digital Solutions</h3>
            <p className="mt-3 text-gray-600">
              E-Government platforms, automation and digital transformation projects.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-green-700">Software & Mobile App Development</h3>
            <p className="mt-3 text-gray-600">
              Custom software, business systems, websites and mobile applications.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-green-700">Strategic Communications</h3>
            <p className="mt-3 text-gray-600">
              Public awareness campaigns, branding, media engagement and digital communication.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-green-700">MuftiPay FinTech Solutions</h3>
            <p className="mt-3 text-gray-600">
              Digital payments, agency banking, merchant services and financial technology solutions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}