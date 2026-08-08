export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-green-700 py-24"
    >
      {/* Decorative background */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-green-400/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center text-white">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold tracking-wider backdrop-blur">
            GET IN TOUCH
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Let&apos;s Build Something
            <span className="block text-green-200">
              Great Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-green-50/90">
            Have a project, partnership opportunity or technology challenge?
            Tell us what you need and the Mufti Services Limited team will
            get back to you.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-5">

          {/* Contact Information */}
          <div className="lg:col-span-2">

            <div className="h-full rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-md md:p-10">

              <h3 className="text-2xl font-bold text-white">
                Mufti Services Limited
              </h3>

              <p className="mt-3 text-green-100">
                Technology • Innovation • Skills Development
              </p>

              <div className="mt-10 space-y-7">

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl">
                    📞
                  </div>

                  <div>
                    <p className="text-sm text-green-200">
                      Phone
                    </p>

                    <a
                      href="tel:+234816622052"
                      className="mt-1 block font-semibold text-white hover:text-green-200"
                    >
                      +234 816 622 052
                    </a>

                    <a
                      href="tel:+2348057925095"
                      className="mt-1 block font-semibold text-white hover:text-green-200"
                    >
                      +234 805 792 5095
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl">
                    💬
                  </div>

                  <div>
                    <p className="text-sm text-green-200">
                      WhatsApp
                    </p>

                    <a
                      href="https://wa.me/2347062937091"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block font-semibold text-white hover:text-green-200"
                    >
                      +234 706 293 7091
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl">
                    ✉️
                  </div>

                  <div>
                    <p className="text-sm text-green-200">
                      Email
                    </p>

                    <a
                      href="mailto:muftiservicesltd@gmail.com"
                      className="mt-1 block break-all font-semibold text-white hover:text-green-200"
                    >
                      muftiservicesltd@gmail.com
                    </a>

                    <a
                      href="mailto:muftimarket@gmail.com"
                      className="mt-1 block break-all font-semibold text-white hover:text-green-200"
                    >
                      muftimarket@gmail.com
                    </a>

                    <a
                      href="mailto:contact@muftipay.com"
                      className="mt-1 block break-all font-semibold text-white hover:text-green-200"
                    >
                      contact@muftipay.com
                    </a>
                  </div>
                </div>

                {/* Gombe */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl">
                    📍
                  </div>

                  <div>
                    <p className="text-sm text-green-200">
                      Gombe Office
                    </p>

                    <p className="mt-1 font-semibold leading-relaxed text-white">
                      Duwa Plaza, Office No. 5C,
                      <br />
                      Gombe State, Nigeria
                    </p>
                  </div>
                </div>

                {/* Abuja */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl">
                    🏢
                  </div>

                  <div>
                    <p className="text-sm text-green-200">
                      Abuja Office
                    </p>

                    <p className="mt-1 font-semibold leading-relaxed text-white">
                      Wuse 2,
                      <br />
                      Aminu Kano Crescent,
                      <br />
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>

              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2347062937091"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-bold text-green-800 shadow-lg transition hover:-translate-y-1 hover:bg-green-50"
              >
                💬 Chat With Us on WhatsApp
              </a>

            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-3">

            <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-10">

              <div className="mb-8">
                <p className="font-bold tracking-wide text-green-700">
                  PROJECT INQUIRY
                </p>

                <h3 className="mt-2 text-3xl font-extrabold text-gray-900">
                  Tell Us About Your Project
                </h3>

                <p className="mt-3 leading-relaxed text-gray-600">
                  Complete the form below and provide enough information
                  for our team to understand your requirements.
                </p>
              </div>

              {/* WEB3FORMS */}
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-6"
              >

                {/* Access Key */}
                <input
                  type="hidden"
                  name="access_key"
                  value="b5f95e3b-c856-4e19-a946-ba07b4d287c6"
                />

                {/* Email Subject */}
                <input
                  type="hidden"
                  name="subject"
                  value="New Inquiry - Mufti Services Limited"
                />

                {/* Sender Name */}
                <input
                  type="hidden"
                  name="from_name"
                  value="Mufti Services Limited Website"
                />

                {/* Full Name + Organization */}
                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Organization / Company
                    </label>

                    <input
                      type="text"
                      name="organization"
                      placeholder="Organization or company name"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                    />
                  </div>

                </div>

                {/* Email + Phone */}
                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Phone / WhatsApp
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="+234..."
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                    />
                  </div>

                </div>

                {/* Organization Type + Service */}
                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Organization Type
                    </label>

                    <select
                      name="organizationType"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                    >
                      <option value="">
                        Select organization type
                      </option>

                      <option>
                        Government / Public Institution
                      </option>

                      <option>
                        NGO / Development Organization
                      </option>

                      <option>
                        Private Company
                      </option>

                      <option>
                        International Organization
                      </option>

                      <option>
                        SME / Startup
                      </option>

                      <option>
                        Individual
                      </option>

                      <option>
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Service Required
                    </label>

                    <select
                      name="service"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                    >
                      <option value="">
                        Select a service
                      </option>

                      <option>
                        Youth Empowerment & Digital Skills Training
                      </option>

                      <option>
                        Digital Transformation & ICT Consulting
                      </option>

                      <option>
                        Government Digital Solutions
                      </option>

                      <option>
                        Software & Web Development
                      </option>

                      <option>
                        MuftiPay Digital Services
                      </option>

                      <option>
                        Data & Monitoring Systems
                      </option>

                      <option>
                        Digital Marketing & Strategic Communication
                      </option>

                      <option>
                        Political Campaign Strategies
                      </option>

                      <option>
                        CCTV & Security Solutions
                      </option>

                      <option>
                        Mobile Application Development
                      </option>

                      <option>
                        Other
                      </option>
                    </select>
                  </div>

                </div>

                {/* Budget */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Budget Range{" "}
                    <span className="font-normal text-gray-400">
                      (Optional)
                    </span>
                  </label>

                  <select
                    name="budget"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                  >
                    <option value="">
                      Select budget range
                    </option>

                    <option>
                      Below ₦1 Million
                    </option>

                    <option>
                      ₦1 Million – ₦5 Million
                    </option>

                    <option>
                      ₦5 Million – ₦10 Million
                    </option>

                    <option>
                      ₦10 Million – ₦50 Million
                    </option>

                    <option>
                      Above ₦50 Million
                    </option>

                    <option>
                      To be discussed
                    </option>
                  </select>
                </div>

                {/* Inquiry */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Project / Inquiry Details
                  </label>

                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us about your project, challenge, goals or service requirements..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-green-700 to-green-600 px-6 py-4 text-lg font-extrabold text-white shadow-lg shadow-green-700/20 transition hover:-translate-y-1 hover:from-green-800 hover:to-green-700"
                >
                  Submit Inquiry →
                </button>

                <p className="text-center text-sm text-gray-500">
                  Mufti Services Limited — Technology • Innovation • Skills
                  Development
                </p>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}