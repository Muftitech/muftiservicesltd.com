export default function Projects() {
  const projects = [
    {
      icon: "💻",
      title: "Software & Web Development",
      description:
        "Modern websites, enterprise platforms, government portals and customized software solutions.",
    },
    {
      icon: "💳",
      title: "MuftiPay Digital Services",
      description:
        "Digital payment solutions and everyday services including airtime, data, bills, and other supported services.",
    },
    {
      icon: "🏛️",
      title: "Government Digital Solutions",
      description:
        "Technology solutions that support government institutions with digital transformation and improved service delivery.",
    },
    {
      icon: "🤝",
      title: "NGO & Development Projects",
      description:
        "Digital solutions, data systems and technology support for NGOs and development organizations.",
    },
    {
      icon: "📱",
      title: "Mobile Applications",
      description:
        "User-friendly mobile applications designed for businesses, organizations and public-facing services.",
    },
    {
      icon: "📊",
      title: "Data & Monitoring Systems",
      description:
        "Digital data collection, dashboards, reporting systems and monitoring solutions for organizations.",
    },
    {
      icon: "🎓",
      title: "ICT Skills Development",
      description:
        "Practical ICT training, digital marketing, AI, data analysis and other technology skills development programmes.",
    },
    {
      icon: "📢",
      title: "Strategic Communication",
      description:
        "Digital marketing, social media management, branding and strategic communication solutions.",
    },
    {
      icon: "🗳️",
      title: "Political Campaign Strategies",
      description:
        "Digital communication, campaign strategy, social media management and technology-supported political outreach.",
    },
    {
      icon: "📹",
      title: "CCTV & Security Solutions",
      description:
        "CCTV installation, monitoring and technology-based security solutions for organizations and businesses.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-green-700 font-bold tracking-wide">
            OUR PROJECTS & SOLUTIONS
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Technology Solutions That Create Impact
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            From government and NGO projects to business technology,
            digital finance and skills development, Mufti Services Limited
            delivers practical solutions designed to create measurable impact.
          </p>

        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-50 text-3xl group-hover:bg-green-700 group-hover:scale-110 transition-all duration-300">
                {project.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-6">
                <span className="text-green-700 font-semibold text-sm">
                  Mufti Services Limited →
                </span>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-green-700 to-blue-700 p-10 md:p-14 text-white text-center">

          <h3 className="text-3xl md:text-4xl font-bold">
            Have a Project in Mind?
          </h3>

          <p className="mt-4 max-w-2xl mx-auto text-white/90">
            Whether you are a government institution, NGO, private company
            or development organization, we can help turn your technology
            needs into practical solutions.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
          >
            Discuss Your Project
          </a>

        </div>

      </div>
    </section>
  );
}