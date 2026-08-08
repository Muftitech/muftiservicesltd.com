export default function MuftiPay() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* ================= MUFTIPAY HERO ================= */}
      <section className="relative min-h-[720px] bg-gradient-to-br from-green-800 via-green-700 to-blue-800 text-white">

        {/* Background glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-400/20 rounded-full blur-3xl" />

        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />

                <span className="text-sm font-semibold tracking-wide">
                  MUFTIPAY DIGITAL PLATFORM
                </span>
              </div>

              <p className="mt-8 text-green-200 font-bold tracking-[0.3em]">
                MUFTIPAY
              </p>

              <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight">
                Everything You Need.
                <span className="block text-green-200">
                  One Platform.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg md:text-xl text-white/80 leading-relaxed">
                Access airtime, data, electricity bills, TV subscriptions,
                flight tickets and other everyday digital services from one
                convenient platform.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="#services"
                  className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-1 transition"
                >
                  Explore Services
                </a>

                <a
                  href="#contact"
                  className="border border-white/50 bg-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-green-700 transition"
                >
                  Get Started
                </a>

              </div>

            </div>


            {/* RIGHT — DASHBOARD */}
            <div className="relative flex justify-center lg:justify-end">

              {/* Floating notification */}
              <div className="absolute -left-2 md:left-4 top-8 z-20 bg-white text-gray-900 rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3 animate-pulse">

                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Payment
                  </p>

                  <p className="font-bold text-sm">
                    Successful
                  </p>
                </div>

              </div>


              {/* Dashboard */}
              <div className="relative w-full max-w-md">

                <div className="absolute inset-0 bg-green-300/20 blur-3xl rounded-full" />

                <div className="relative bg-white rounded-[2rem] p-5 shadow-2xl text-gray-900">

                  {/* Header */}
                  <div className="flex justify-between items-center">

                    <div>
                      <p className="text-xs text-gray-400">
                        Welcome back
                      </p>

                      <h2 className="text-xl font-bold">
                        MuftiPay
                      </h2>
                    </div>

                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-white flex items-center justify-center font-bold">
                      M
                    </div>

                  </div>


                  {/* Balance */}
                  <div className="mt-5 bg-gradient-to-r from-green-700 to-blue-700 rounded-2xl p-6 text-white">

                    <p className="text-sm text-white/70">
                      Available Balance
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                      ₦125,500.00
                    </h2>

                    <div className="mt-5 flex justify-between text-xs text-white/70">
                      <span>MuftiPay Wallet</span>
                      <span>•••• 4582</span>
                    </div>

                  </div>


                  {/* Quick Services */}
                  <div className="mt-6">

                    <div className="flex justify-between mb-4">
                      <h3 className="font-bold">
                        Quick Services
                      </h3>

                      <span className="text-xs text-green-600">
                        View all
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-3">

                      <div className="text-center">
                        <div className="h-12 w-12 mx-auto rounded-xl bg-green-50 flex items-center justify-center text-xl hover:-translate-y-1 transition">
                          📱
                        </div>

                        <p className="mt-2 text-[11px]">
                          Airtime
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="h-12 w-12 mx-auto rounded-xl bg-blue-50 flex items-center justify-center text-xl hover:-translate-y-1 transition">
                          🌐
                        </div>

                        <p className="mt-2 text-[11px]">
                          Data
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="h-12 w-12 mx-auto rounded-xl bg-yellow-50 flex items-center justify-center text-xl hover:-translate-y-1 transition">
                          ⚡
                        </div>

                        <p className="mt-2 text-[11px]">
                          Electricity
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="h-12 w-12 mx-auto rounded-xl bg-purple-50 flex items-center justify-center text-xl hover:-translate-y-1 transition">
                          📺
                        </div>

                        <p className="mt-2 text-[11px]">
                          TV
                        </p>
                      </div>

                    </div>

                  </div>


                  {/* Transaction */}
                  <div className="mt-6 bg-gray-50 rounded-xl p-4 flex justify-between items-center">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        📱
                      </div>

                      <div>
                        <p className="font-semibold text-sm">
                          Airtime Recharge
                        </p>

                        <p className="text-xs text-green-600">
                          Successful
                        </p>
                      </div>

                    </div>

                    <p className="font-bold text-sm">
                      -₦5,000
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
      
      <section
        id="services"
        className="py-20 md:py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}
          <div className="max-w-3xl">
            <p className="text-green-700 font-bold tracking-[0.25em] text-sm">
              MUFTIPAY SERVICES
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold">
                Everyday Digital Services
                </h2>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Access essential services through the MuftiPay platform.
            </p>
          </div>


          {/* Airtime Card */}
          <div className="mt-12 max-w-2xl">

            <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-700 to-green-900 p-8 md:p-10 text-white shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

              {/* Background Glow */}
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-green-300/20 blur-3xl" />

              <div className="relative">

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-3xl group-hover:scale-110 transition duration-500">
                  📱
                </div>


                <p className="mt-7 text-green-200 text-sm font-bold tracking-widest">
                  MOBILE SERVICE
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Buy Airtime
                </h3>

                <p className="mt-4 text-white/75 leading-relaxed">
                  Recharge supported mobile networks quickly and
                  conveniently with MuftiPay.
                </p>


                {/* Mini Airtime Interface */}
                <div className="mt-8 rounded-2xl bg-white p-5 text-gray-900 shadow-xl">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs text-gray-400">
                        Mobile Number
                      </p>

                      <p className="mt-1 font-bold">
                        +234 814 *** 2052
                      </p>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center text-xl">
                      📱
                    </div>

                  </div>


                  <p className="mt-5 text-xs text-gray-400">
                    Select Amount
                  </p>

                  <div className="mt-2 grid grid-cols-3 gap-2">

                    <div className="rounded-lg bg-gray-100 px-3 py-3 text-center text-sm font-semibold">
                      ₦500
                    </div>

                    <div className="rounded-lg bg-green-100 text-green-700 px-3 py-3 text-center text-sm font-bold">
                      ₦1,000
                    </div>

                    <div className="rounded-lg bg-gray-100 px-3 py-3 text-center text-sm font-semibold">
                      ₦2,000
                    </div>

                  </div>

                </div>


                <div className="mt-7 flex items-center justify-between">

                  <span className="font-bold text-green-200">
                    Airtime Recharge
                  </span>

                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-green-700 transition">
                    →
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
``````tsx
      {/* ================= PART 2B — DATA ================= */}
      <section className="pb-20 md:pb-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-7">

            {/* DATA SERVICE */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 to-blue-900 p-8 md:p-10 text-white shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

              {/* Background Glow */}
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-300/20 blur-3xl" />

              <div className="relative">

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-3xl group-hover:scale-110 transition duration-500">
                  🌐
                </div>


                <p className="mt-7 text-blue-200 text-sm font-bold tracking-widest">
                  INTERNET SERVICE
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Buy Data
                </h3>

                <p className="mt-4 text-white/75 leading-relaxed">
                  Purchase supported internet data bundles and stay
                  connected wherever you are.
                </p>


                {/* Mini Data Interface */}
                <div className="mt-8 rounded-2xl bg-white p-5 text-gray-900 shadow-xl">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs text-gray-400">
                        Data Service
                      </p>

                      <p className="mt-1 font-bold">
                        Choose Data Bundle
                      </p>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-xl">
                      🌐
                    </div>

                  </div>


                  <p className="mt-5 text-xs text-gray-400">
                    Select Bundle
                  </p>


                  <div className="mt-2 grid grid-cols-3 gap-2">

                    <div className="rounded-lg bg-gray-100 px-2 py-3 text-center">
                      <p className="text-sm font-bold">
                        1GB
                      </p>

                      <p className="text-[10px] text-gray-400">
                        Daily
                      </p>
                    </div>


                    <div className="rounded-lg bg-blue-100 text-blue-700 px-2 py-3 text-center">
                      <p className="text-sm font-bold">
                        5GB
                      </p>

                      <p className="text-[10px] text-blue-500">
                        Popular
                      </p>
                    </div>


                    <div className="rounded-lg bg-gray-100 px-2 py-3 text-center">
                      <p className="text-sm font-bold">
                        10GB
                      </p>

                      <p className="text-[10px] text-gray-400">
                        Monthly
                      </p>
                    </div>

                  </div>

                </div>


                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between">

                  <span className="font-bold text-blue-200">
                    Data Bundles
                  </span>

                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-blue-700 transition">
                    →
                  </span>

                </div>

              </div>

            </div>


            {/* SERVICE PREVIEW CARD */}
            <div className="relative overflow-hidden rounded-[2rem] bg-white border border-gray-100 p-8 md:p-10 shadow-xl">

              {/* Decorative Glow */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-green-100 rounded-full blur-3xl" />

              <div className="relative">

                <p className="text-green-700 text-sm font-bold tracking-widest">
                  MUFTIPAY EXPERIENCE
                </p>

                <h3 className="mt-3 text-3xl font-bold text-gray-900">
                  Simple. Fast.
                  <span className="block text-green-700">
                    Convenient.
                  </span>
                </h3>

                <p className="mt-5 text-gray-600 leading-relaxed">
                  MuftiPay is designed to make everyday digital
                  transactions simple and accessible.
                </p>


                {/* Animated Service List */}
                <div className="mt-8 space-y-4">


                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 hover:-translate-x-1 transition duration-300">

                    <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center text-xl">
                      📱
                    </div>

                    <div className="flex-1">

                      <p className="font-bold text-gray-900">
                        Airtime Recharge
                      </p>

                      <p className="text-xs text-gray-500">
                        Quick mobile recharge
                      </p>

                    </div>

                    <span className="text-green-600 font-bold">
                      ✓
                    </span>

                  </div>


                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 hover:-translate-x-1 transition duration-300">

                    <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-xl">
                      🌐
                    </div>

                    <div className="flex-1">

                      <p className="font-bold text-gray-900">
                        Data Bundles
                      </p>

                      <p className="text-xs text-gray-500">
                        Stay connected
                      </p>

                    </div>

                    <span className="text-blue-600 font-bold">
                      ✓
                    </span>

                  </div>


                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-purple-50 hover:-translate-x-1 transition duration-300">

                    <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center text-xl">
                      📺
                    </div>

                    <div className="flex-1">

                      <p className="font-bold text-gray-900">
                        Entertainment
                      </p>

                      <p className="text-xs text-gray-500">
                        TV & digital services
                      </p>

                    </div>

                    <span className="text-purple-600 font-bold">
                      ✓
                    </span>

                  </div>


                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-yellow-50 hover:-translate-x-1 transition duration-300">

                    <div className="w-11 h-11 rounded-xl bg-yellow-100 flex items-center justify-center text-xl">
                      ⚡
                    </div>

                    <div className="flex-1">

                      <p className="font-bold text-gray-900">
                        Bill Payments
                      </p>

                      <p className="text-xs text-gray-500">
                        Everyday payments
                      </p>

                    </div>

                    <span className="text-yellow-600 font-bold">
                      ✓
                    </span>

                  </div>

                </div>


                {/* Bottom Badge */}
                <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold">

                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

                  More services coming soon

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
``````tsx id="x4q8km"
      {/* ================= PART 3A — ELECTRICITY ================= */}
      <section className="py-20 md:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT — TEXT */}
            <div>

              <p className="text-green-700 font-bold tracking-[0.25em] text-sm">
                UTILITY PAYMENTS
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Pay Your
                <span className="block text-green-700">
                  Electricity Bills
                </span>
                Easily.
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                MuftiPay makes supported electricity bill payments
                simple and convenient, giving users an easier way to
                manage their everyday utility needs.
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center text-2xl">
                  ⚡
                </div>

                <div>
                  <p className="font-bold text-gray-900">
                    Fast & Convenient
                  </p>

                  <p className="text-sm text-gray-500">
                    Designed for everyday payments
                  </p>
                </div>

              </div>

            </div>


            {/* RIGHT — ELECTRICITY APP PREVIEW */}
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-10 bg-yellow-200/40 blur-3xl rounded-full" />

              <div className="relative w-full max-w-sm sm:max-w-md mx-auto bg-gray-950 rounded-[2.5rem] p-3 shadow-2xl">

                {/* Phone Screen */}
                <div className="rounded-[2rem] bg-gray-50 overflow-hidden">

                  {/* Header */}
                  <div className="bg-gradient-to-r from-green-700 to-blue-700 px-6 py-7 text-white">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-xs text-white/60">
                          MuftiPay
                        </p>

                        <h3 className="text-xl font-bold">
                          Electricity
                        </h3>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                        ⚡
                      </div>

                    </div>

                  </div>


                  {/* Form */}
                  <div className="p-6">

                    <p className="text-xs font-semibold text-gray-500">
                      Electricity Provider
                    </p>

                    <div className="mt-2 p-4 rounded-xl bg-white border border-gray-200 flex items-center justify-between">

                      <span className="font-semibold text-gray-800">
                        Select Provider
                      </span>

                      <span className="text-gray-400">
                        ▼
                      </span>

                    </div>


                    <p className="mt-5 text-xs font-semibold text-gray-500">
                      Meter Number
                    </p>

                    <div className="mt-2 p-4 rounded-xl bg-white border border-gray-200">
                      <span className="text-gray-400 text-sm">
                        Enter meter number
                      </span>
                    </div>


                    <p className="mt-5 text-xs font-semibold text-gray-500">
                      Amount
                    </p>

                    <div className="mt-2 p-4 rounded-xl bg-white border border-gray-200">
                      <span className="text-gray-400 text-sm">
                        ₦ Enter amount
                      </span>
                    </div>


                    <button
                      type="button"
                      className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-green-700 to-blue-700 text-white font-bold hover:shadow-lg transition"
                    >
                      Continue
                    </button>


                    {/* Success Preview */}
                    <div className="mt-5 flex items-center gap-3 rounded-xl bg-green-50 p-4">

                      <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                        ✓
                      </div>

                      <div>
                        <p className="text-sm font-bold text-gray-800">
                          Secure Payment
                        </p>

                        <p className="text-xs text-gray-500">
                          Ready when you are
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* Floating Notification */}
              <div className="absolute -bottom-5 -left-3 md:left-0 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-pulses">

                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  ⚡
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Utility Payment
                  </p>

                  <p className="text-sm font-bold text-gray-900">
                    Electricity
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="py-20 md:py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT — TV APP PREVIEW */}
            <div className="relative order-2 lg:order-1">

              {/* Glow */}
              <div className="absolute inset-10 bg-purple-200/40 blur-3xl rounded-full" />

              <div className="relative max-w-md mx-auto bg-gray-950 rounded-[2.5rem] p-3 shadow-2xl">

                <div className="rounded-[2rem] bg-gray-50 overflow-hidden">

                  {/* Header */}
                  <div className="bg-gradient-to-r from-purple-700 to-blue-700 px-6 py-7 text-white">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-xs text-white/60">
                          MuftiPay
                        </p>

                        <h3 className="text-xl font-bold">
                          TV & Cable
                        </h3>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                        📺
                      </div>

                    </div>

                  </div>


                  {/* Content */}
                  <div className="p-6">

                    <p className="text-xs font-semibold text-gray-500">
                      Select Provider
                    </p>

                    <div className="mt-2 p-4 rounded-xl bg-white border border-gray-200 flex items-center justify-between">

                      <span className="font-semibold text-gray-800">
                        TV Provider
                      </span>

                      <span className="text-gray-400">
                        ▼
                      </span>

                    </div>


                    <p className="mt-5 text-xs font-semibold text-gray-500">
                      Smart Card / IUC Number
                    </p>

                    <div className="mt-2 p-4 rounded-xl bg-white border border-gray-200">
                      <span className="text-gray-400 text-sm">
                        Enter number
                      </span>
                    </div>


                    {/* Package */}
                    <div className="mt-5">

                      <p className="text-xs font-semibold text-gray-500">
                        Select Package
                      </p>

                      <div className="mt-2 grid grid-cols-2 gap-2">

                        <div className="p-3 rounded-xl bg-purple-50 border border-purple-100">
                          <p className="text-sm font-bold text-purple-700">
                            Basic
                          </p>

                          <p className="text-xs text-gray-500">
                            Monthly
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-white border border-gray-200">
                          <p className="text-sm font-bold text-gray-800">
                            Premium
                          </p>

                          <p className="text-xs text-gray-500">
                            Monthly
                          </p>
                        </div>

                      </div>

                    </div>


                    <button
                      type="button"
                      className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-purple-700 to-blue-700 text-white font-bold hover:shadow-lg transition"
                    >
                      Continue
                    </button>


                    {/* Status */}
                    <div className="mt-5 flex items-center gap-3 rounded-xl bg-green-50 p-4">

                      <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                        ✓
                      </div>

                      <div>
                        <p className="text-sm font-bold text-gray-800">
                          Entertainment
                        </p>

                        <p className="text-xs text-gray-500">
                          Ready for subscription
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* RIGHT — TEXT */}
            <div className="order-1 lg:order-2">

              <p className="text-purple-700 font-bold tracking-[0.25em] text-sm">
                ENTERTAINMENT
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Keep Your
                <span className="block text-purple-700">
                  Entertainment Active.
                </span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                Renew supported TV and cable subscriptions through a
                simple digital experience designed for convenience.
              </p>


              {/* Feature Points */}
              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">
                    📺
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      TV Subscriptions
                    </p>

                    <p className="text-sm text-gray-500">
                      Manage supported entertainment services
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                    ⚡
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      Quick Renewal
                    </p>

                    <p className="text-sm text-gray-500">
                      Designed for simple everyday transactions
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
                    ✓
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      Convenient Experience
                    </p>

                    <p className="text-sm text-gray-500">
                      Everything organized in one platform
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
```
```tsx
      {/* ================= PART 3C — BILL PAYMENTS ================= */}
      <section className="py-20 md:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mx-auto text-center">

            <p className="text-green-700 font-bold tracking-[0.25em] text-sm">
              BILL PAYMENTS
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
              Pay Your Bills
              <span className="block text-green-700">
                Without the Stress.
              </span>
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              MuftiPay brings supported everyday bill payments into
              one simple digital experience.
            </p>

          </div>


          {/* Bill Dashboard */}
          <div className="mt-14 max-w-5xl mx-auto">

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 p-7 md:p-10 shadow-2xl">

              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />

              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />


              <div className="relative">

                {/* Dashboard Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

                  <div>

                    <p className="text-white/50 text-sm">
                      MuftiPay Dashboard
                    </p>

                    <h3 className="mt-1 text-2xl md:text-3xl font-bold text-white">
                      Bill Payments
                    </h3>

                  </div>


                  <div className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2">

                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                    <span className="text-sm text-white/80">
                      Available Services
                    </span>

                  </div>

                </div>


                {/* Bill Cards */}
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">


                  {/* Electricity */}
                  <div className="group bg-white rounded-2xl p-5 hover:-translate-y-2 transition duration-300">

                    <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-2xl">
                      ⚡
                    </div>

                    <h4 className="mt-5 font-bold text-gray-900">
                      Electricity
                    </h4>

                    <p className="mt-2 text-xs text-gray-500">
                      Utility payment
                    </p>

                    <div className="mt-5 text-sm font-bold text-green-700">
                      Pay →
                    </div>

                  </div>


                  {/* TV */}
                  <div className="group bg-white rounded-2xl p-5 hover:-translate-y-2 transition duration-300">

                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
                      📺
                    </div>

                    <h4 className="mt-5 font-bold text-gray-900">
                      TV & Cable
                    </h4>

                    <p className="mt-2 text-xs text-gray-500">
                      Subscription
                    </p>

                    <div className="mt-5 text-sm font-bold text-purple-700">
                      Pay →
                    </div>

                  </div>


                  {/* Airtime */}
                  <div className="group bg-white rounded-2xl p-5 hover:-translate-y-2 transition duration-300">

                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
                      📱
                    </div>

                    <h4 className="mt-5 font-bold text-gray-900">
                      Airtime
                    </h4>

                    <p className="mt-2 text-xs text-gray-500">
                      Mobile recharge
                    </p>

                    <div className="mt-5 text-sm font-bold text-green-700">
                      Recharge →
                    </div>

                  </div>


                  {/* Data */}
                  <div className="group bg-white rounded-2xl p-5 hover:-translate-y-2 transition duration-300">

                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
                      🌐
                    </div>

                    <h4 className="mt-5 font-bold text-gray-900">
                      Data
                    </h4>

                    <p className="mt-2 text-xs text-gray-500">
                      Internet bundle
                    </p>

                    <div className="mt-5 text-sm font-bold text-blue-700">
                      Buy →
                    </div>

                  </div>

                </div>


                {/* Bottom Transaction */}
                <div className="mt-6 bg-white/10 border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-xl bg-green-500/20 flex items-center justify-center text-green-300">
                      ✓
                    </div>

                    <div>

                      <p className="font-semibold text-white">
                        Simple digital payments
                      </p>

                      <p className="text-xs text-white/50">
                        Multiple everyday services in one place
                      </p>

                    </div>

                  </div>


                  <span className="text-sm font-bold text-green-300">
                    MuftiPay
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
```
```tsx id="m8k2vd"
      {/* ================= PART 4 — FLIGHT TICKETS ================= */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gray-50 overflow-hidden">

        {/* Background Decorations */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-green-100 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">


            {/* ================= LEFT — FLIGHT APP ================= */}
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-10 bg-blue-200/40 rounded-full blur-3xl" />

              {/* Dashboard */}
              <div className="relative max-w-lg mx-auto rounded-[2rem] bg-white border border-gray-100 shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-gradient-to-r from-blue-700 to-green-700 p-7 text-white">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs text-white/60">
                        MUFTIPAY
                      </p>

                      <h3 className="mt-1 text-2xl font-bold">
                        Flight Search
                      </h3>

                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-2xl">
                      ✈️
                    </div>

                  </div>

                </div>


                {/* Search Form */}
                <div className="p-6 md:p-7">

                  {/* From */}
                  <div>

                    <p className="text-xs font-semibold text-gray-400">
                      FROM
                    </p>

                    <div className="mt-2 flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4">

                      <div>

                        <p className="text-xs text-gray-400">
                          Departure
                        </p>

                        <p className="font-bold text-gray-900">
                          Gombe
                        </p>

                      </div>

                      <span className="text-blue-600 text-xl">
                        ⇄
                      </span>

                      <div className="text-right">

                        <p className="text-xs text-gray-400">
                          Destination
                        </p>

                        <p className="font-bold text-gray-900">
                          Abuja
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* Date */}
                  <div className="mt-5 grid grid-cols-2 gap-3">

                    <div className="rounded-xl border border-gray-200 p-4">

                      <p className="text-xs text-gray-400">
                        DEPARTURE
                      </p>

                      <p className="mt-1 font-bold text-gray-900">
                        Select Date
                      </p>

                    </div>


                    <div className="rounded-xl border border-gray-200 p-4">

                      <p className="text-xs text-gray-400">
                        PASSENGERS
                      </p>

                      <p className="mt-1 font-bold text-gray-900">
                        1 Passenger
                      </p>

                    </div>

                  </div>


                  {/* Search Button */}
                  <button
                    type="button"
                    className="mt-5 w-full rounded-xl bg-gradient-to-r from-blue-700 to-green-700 py-4 font-bold text-white hover:-translate-y-1 hover:shadow-lg transition"
                  >
                    Search Flights
                  </button>


                  {/* Flight Result */}
                  <div className="mt-5 rounded-2xl bg-gray-50 border border-gray-100 p-4">

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-xs text-gray-400">
                          AVAILABLE FLIGHT
                        </p>

                        <p className="mt-1 font-bold text-gray-900">
                          Gombe → Abuja
                        </p>

                      </div>

                      <span className="text-green-600 font-bold">
                        ✓
                      </span>

                    </div>

                  </div>

                </div>

              </div>


              {/* Floating Ticket */}
              <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:right-0 bg-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-3 animate-pulse">

                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-xl">
                  🎫
                </div>

                <div>

                  <p className="text-xs text-gray-400">
                    Travel
                  </p>

                  <p className="font-bold text-gray-900">
                    Flight Ticket
                  </p>

                </div>

              </div>

            </div>


            {/* ================= RIGHT — CONTENT ================= */}
            <div>

              <p className="text-blue-700 font-bold tracking-[0.25em] text-sm">
                TRAVEL SERVICES
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Plan Your Next
                <span className="block text-blue-700">
                  Journey With MuftiPay.
                </span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                Access flight booking and selected travel-related
                services through a simple digital experience.
              </p>


              {/* Feature List */}
              <div className="mt-9 space-y-5">


                <div className="flex gap-4">

                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-100 flex items-center justify-center text-xl">
                    🔎
                  </div>

                  <div>

                    <h3 className="font-bold text-gray-900">
                      Search Flights
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Explore available flight options for your journey.
                    </p>

                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-green-100 flex items-center justify-center text-xl">
                    🎫
                  </div>

                  <div>

                    <h3 className="font-bold text-gray-900">
                      Travel Services
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Convenient access to selected travel-related services.
                    </p>

                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-purple-100 flex items-center justify-center text-xl">
                    📱
                  </div>

                  <div>

                    <h3 className="font-bold text-gray-900">
                      Digital Experience
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Manage your services through a modern platform.
                    </p>

                  </div>

                </div>

              </div>


              {/* CTA */}
              <div className="mt-9">

                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-700 to-green-700 px-5 py-3 sm:px-7 sm:py-4 font-bold text-white shadow-lg hover:-translate-y-1 hover:shadow-xl transition"
                >
                  Explore Travel Services
                  <span>→</span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>
```
```tsx
      {/* ================= PART 5 — MUFTIPAY FINAL EXPERIENCE ================= */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">

        {/* Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-green-100/40 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">


          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center">

            <p className="text-green-700 font-bold tracking-[0.25em] text-sm">
              THE MUFTIPAY EXPERIENCE
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
              One Platform.
              <span className="block text-green-700">
                Multiple Digital Services.
              </span>
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              MuftiPay brings everyday digital services together in
              one convenient and modern platform.
            </p>

          </div>


          {/* ================= DASHBOARD ================= */}
          <div className="mt-14 max-w-6xl mx-auto">

            <div className="relative rounded-[2rem] bg-gray-950 p-3 md:p-4 shadow-2xl">

              <div className="rounded-[1.5rem] bg-gray-50 overflow-hidden">


                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-green-700 to-blue-700 px-6 md:px-8 py-6 text-white">

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

                    <div>

                      <p className="text-xs text-white/60 tracking-widest">
                        MUFTIPAY
                      </p>

                      <h3 className="mt-1 text-2xl md:text-3xl font-bold">
                        Digital Services
                      </h3>

                    </div>


                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        🔔
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        👤
                      </div>

                    </div>

                  </div>

                </div>


                {/* Dashboard Content */}
                <div className="p-6 md:p-8">


                  {/* Balance Preview */}
                  <div className="rounded-2xl bg-gradient-to-r from-green-700 to-blue-700 p-6 text-white">

                    <p className="text-sm text-white/60">
                      Available Balance
                    </p>

                    <div className="mt-2 flex items-end justify-between gap-4">

                      <div>

                        <p className="text-3xl md:text-4xl font-extrabold">
                          ₦25,000
                        </p>

                        <p className="mt-2 text-xs text-white/60">
                          Sample dashboard preview
                        </p>

                      </div>

                      <div className="text-4xl">
                        💳
                      </div>

                    </div>

                  </div>


                  {/* Services */}
                  <div className="mt-8">

                    <div className="flex items-center justify-between">

                      <h4 className="text-xl font-bold text-gray-900">
                        Services
                      </h4>

                      <span className="text-sm text-green-700 font-semibold">
                        View all →
                      </span>

                    </div>


                    <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">


                      {/* Airtime */}
                      <div className="group bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm hover:-translate-y-2 hover:shadow-lg transition duration-300">

                        <div className="mx-auto w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                          📱
                        </div>

                        <p className="mt-3 text-sm font-bold text-gray-800">
                          Airtime
                        </p>

                      </div>


                      {/* Data */}
                      <div className="group bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm hover:-translate-y-2 hover:shadow-lg transition duration-300">

                        <div className="mx-auto w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                          🌐
                        </div>

                        <p className="mt-3 text-sm font-bold text-gray-800">
                          Data
                        </p>

                      </div>


                      {/* Electricity */}
                      <div className="group bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm hover:-translate-y-2 hover:shadow-lg transition duration-300">

                        <div className="mx-auto w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                          ⚡
                        </div>

                        <p className="mt-3 text-sm font-bold text-gray-800">
                          Electricity
                        </p>

                      </div>


                      {/* TV */}
                      <div className="group bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm hover:-translate-y-2 hover:shadow-lg transition duration-300">

                        <div className="mx-auto w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                          📺
                        </div>

                        <p className="mt-3 text-sm font-bold text-gray-800">
                          TV & Cable
                        </p>

                      </div>


                      {/* Flights */}
                      <div className="group bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm hover:-translate-y-2 hover:shadow-lg transition duration-300">

                        <div className="mx-auto w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                          ✈️
                        </div>

                        <p className="mt-3 text-sm font-bold text-gray-800">
                          Flights
                        </p>

                      </div>


                      {/* Bills */}
                      <div className="group bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm hover:-translate-y-2 hover:shadow-lg transition duration-300">

                        <div className="mx-auto w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                          🧾
                        </div>

                        <p className="mt-3 text-sm font-bold text-gray-800">
                          Bills
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* Recent Activity */}
                  <div className="mt-9 grid md:grid-cols-2 gap-5">


                    <div className="rounded-2xl bg-white border border-gray-100 p-5">

                      <div className="flex items-center justify-between">

                        <h4 className="font-bold text-gray-900">
                          Recent Activity
                        </h4>

                        <span className="text-xs text-gray-400">
                          Sample
                        </span>

                      </div>


                      <div className="mt-5 space-y-4">


                        <div className="flex items-center gap-3">

                          <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                            📱
                          </div>

                          <div className="flex-1">

                            <p className="text-sm font-bold text-gray-800">
                              Airtime Recharge
                            </p>

                            <p className="text-xs text-gray-400">
                              Completed
                            </p>

                          </div>

                          <span className="text-sm font-bold text-gray-900">
                            ₦1,000
                          </span>

                        </div>


                        <div className="flex items-center gap-3">

                          <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                            ⚡
                          </div>

                          <div className="flex-1">

                            <p className="text-sm font-bold text-gray-800">
                              Electricity
                            </p>

                            <p className="text-xs text-gray-400">
                              Completed
                            </p>

                          </div>

                          <span className="text-sm font-bold text-gray-900">
                            ₦5,000
                          </span>

                        </div>

                      </div>

                    </div>


                    {/* Quick Action */}
                    <div className="rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border border-gray-100 p-5">

                      <p className="text-sm font-bold text-green-700">
                        QUICK ACCESS
                      </p>

                      <h4 className="mt-2 text-xl font-bold text-gray-900">
                        Your everyday services,
                        <span className="block">
                          in one place.
                        </span>
                      </h4>

                      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                        A simple digital experience designed around
                        convenience and accessibility.
                      </p>

                      <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-green-700 shadow-sm">
                        Explore MuftiPay
                        <span>→</span>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ================= FINAL CTA ================= */}
          <div className="mt-16 relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-green-700 to-blue-700 px-7 py-12 md:px-12 md:py-14 text-center text-white">

            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">

              <p className="text-green-100 font-bold tracking-[0.25em] text-sm">
                MUFTIPAY
              </p>

              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
                Digital Services,
                <span className="block">
                  Made Simpler.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl mx-auto text-white/80 leading-relaxed">
                Discover how MuftiPay can bring everyday digital
                services together through one convenient platform.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">

                <a
                  href="mailto:muftiservicesltd@gmail.com"
                  className="rounded-xl bg-white px-7 py-4 font-bold text-green-700 hover:bg-gray-100 transition"
                >
                  Contact MuftiPay
                </a>

                <a
                  href="https://wa.me/2347062937091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border-2 border-white px-5 py-3 sm:px-7 sm:py-4 font-bold text-white hover:bg-white hover:text-green-700 transition"
                >
                  WhatsApp Us
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>
```




    </main>
  );
}