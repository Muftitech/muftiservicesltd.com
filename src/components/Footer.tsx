export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-green-400">
            Mufti Services Limited
          </h2>

          <p className="mt-4 text-gray-300">
            Technology • Innovation • Skills Development
          </p>

          <p className="mt-4 text-gray-400">
            Delivering innovative ICT solutions, youth empowerment,
            fintech services and digital transformation across Nigeria.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-300">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Our Services</h3>

          <ul className="space-y-3 text-gray-300">
            <li>ICT Training</li>
            <li>Software Development</li>
            <li>Digital Marketing</li>
            <li>MuftiPay</li>
            <li>Youth Empowerment</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">
            Contact Information
          </h3>

          <p className="text-gray-300">
            📍 Gombe & Abuja Offices
          </p>

          <p className="text-gray-300 mt-2">
            📧 muftiservicesltd@gmail.com
          </p>

          <p className="text-gray-300 mt-2">
            📞 +234 814 662 2052
          </p>

          <p className="text-gray-300 mt-2">
            💬 +234 706 293 7091
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
        © 2026 Mufti Services Limited. All Rights Reserved.
      </div>
    </footer>
  );
}