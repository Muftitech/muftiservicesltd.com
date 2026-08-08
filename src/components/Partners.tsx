export default function Partners() {
  const partners = [
    {
      icon: "🏛️",
      title: "Government",
      description:
        "Digital solutions, ICT services and technology support for government institutions and public-sector programmes.",
    },
    {
      icon: "🌍",
      title: "NGOs",
      description:
        "Technology, data management, training and digital solutions supporting NGO and development programmes.",
    },
    {
      icon: "🏢",
      title: "Private Sector",
      description:
        "Business technology, software development, digital transformation and strategic technology services.",
    },
    {
      icon: "🎓",
      title: "Institutions",
      description:
        "ICT solutions, digital skills development and technology support for educational and professional institutions.",
    },
    {
      icon: "💳",
      title: "FinTech",
      description:
        "Digital payment solutions and financial technology services through the MuftiPay platform.",
    },
    {
      icon: "🤝",
      title: "Development Partners",
      description:
        "Technology-driven solutions supporting development initiatives, empowerment programmes and community impact.",
    },
  ];

  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-gray-50 py-24"
    >
      {/* Background Decoration */}
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-green-100 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-green-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-bold tracking-wide text-green-700">
            OUR PARTNERSHIPS
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Trusted Across
            <span className="block text-green-700">
              Different Sectors
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Mufti Services Limited works with governments, NGOs, private
            organizations, institutions and development partners to deliver
            practical technology solutions and impactful programmes.
          </p>

        </div>

        {/* Partner Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-3xl transition-all duration-300 group-hover:bg-green-700 group-hover:scale-110">
                {partner.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {partner.title}
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                {partner.description}
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-green-600 transition-all duration-300 group-hover:w-20" />

            </div>
          ))}

        </div>

        {/* Bottom Message */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-green-800 to-green-600 p-10 text-center text-white shadow-xl md:p-14">

          <h3 className="text-3xl font-extrabold md:text-4xl">
            Let&apos;s Create Impact Together
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-green-50/90">
            Whether you represent a government institution, NGO, private
            company or development organization, Mufti Services Limited is
            ready to support your technology and development goals.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-green-700 transition hover:-translate-y-1 hover:bg-green-50"
          >
            Partner With Us →
          </a>

        </div>

      </div>
    </section>
  );
}