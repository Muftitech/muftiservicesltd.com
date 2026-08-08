export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-700 text-white">

      {/* Background Effects */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />

      {/* Grid Effect */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-20">

        <div className="grid w-full items-center gap-14 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="max-w-3xl">

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-300/30 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-300" />
              Technology • Innovation • Skills Development
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">

              Powering the Future
              <span className="block text-green-200">
                Through Technology
              </span>

            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-green-50/90 md:text-xl">
              Mufti Services Limited delivers innovative technology,
              digital transformation, fintech, software development,
              youth empowerment and strategic digital solutions for
              governments, NGOs, businesses and development partners
              across Nigeria.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="#services"
                className="rounded-xl bg-white px-8 py-4 text-center font-bold text-green-800 shadow-xl transition hover:-translate-y-1 hover:bg-green-50"
              >
                Explore Our Solutions →
              </a>

              <a
                href="#contact"
                className="rounded-xl border-2 border-white/70 px-8 py-4 text-center font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-green-800"
              >
                Partner With Us
              </a>

            </div>

            {/* Trust Text */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-green-100/80">
              <span>✓ Government Solutions</span>
              <span>✓ NGO & Development Projects</span>
              <span>✓ Enterprise Technology</span>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden lg:block">

            {/* Main Technology Card */}
            <div className="relative mx-auto max-w-md">

              {/* Glow */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-green-300/20 blur-3xl" />

              <div className="relative rounded-[2.5rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">

                {/* Top Bar */}
                <div className="mb-6 flex items-center justify-between">

                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-green-300" />
                    <span className="text-sm font-semibold text-green-100">
                      MUFTI TECHNOLOGY
                    </span>
                  </div>

                  <span className="rounded-full bg-green-300/10 px-3 py-1 text-xs font-semibold text-green-200">
                    ACTIVE
                  </span>

                </div>

                {/* Central Logo Style */}
                <div className="flex h-52 items-center justify-center rounded-3xl bg-gradient-to-br from-green-400/20 to-white/5">

                  <div className="text-center">

                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-2xl">
                      <span className="text-5xl font-black text-green-700">
                        M
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-extrabold">
                      Mufti Services
                    </h3>

                    <p className="mt-1 text-sm text-green-200">
                      Digital Solutions
                    </p>

                  </div>

                </div>

                {/* Technology Cards */}
                <div className="mt-5 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/15">
                    <div className="text-2xl">💻</div>
                    <p className="mt-3 font-bold">
                      Software
                    </p>
                    <p className="mt-1 text-xs text-green-100/70">
                      Web & Enterprise
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/15">
                    <div className="text-2xl">💳</div>
                    <p className="mt-3 font-bold">
                      MuftiPay
                    </p>
                    <p className="mt-1 text-xs text-green-100/70">
                      Digital Services
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/15">
                    <div className="text-2xl">🎓</div>
                    <p className="mt-3 font-bold">
                      Empowerment
                    </p>
                    <p className="mt-1 text-xs text-green-100/70">
                      Skills Development
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/15">
                    <div className="text-2xl">📊</div>
                    <p className="mt-3 font-bold">
                      Data
                    </p>
                    <p className="mt-1 text-xs text-green-100/70">
                      Digital Intelligence
                    </p>
                  </div>

                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute -right-8 top-10 rounded-2xl border border-white/10 bg-white px-5 py-4 text-green-800 shadow-2xl">
                <p className="text-xs font-semibold">
                  DIGITAL
                </p>
                <p className="text-lg font-extrabold">
                  INNOVATION
                </p>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-7 -left-8 rounded-2xl border border-white/10 bg-green-950 px-5 py-4 shadow-2xl">
                <p className="text-xs text-green-300">
                  SERVING
                </p>
                <p className="text-lg font-extrabold">
                  NIGERIA 🇳🇬
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}