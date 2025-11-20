function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.25),transparent_45%)]"></div>
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Certified Kitchen Exhaust Cleaning for Safer, Compliant Kitchens
            </h1>
            <p className="mt-6 text-lg text-slate-200">
              Serving Ottawa and Eastern Ontario. We remove grease, reduce fire risk, and keep you compliant with NFPA 96 standards.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#quote" className="px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 font-semibold shadow">
                Get a Free Assessment
              </a>
              <a href="#how" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 font-semibold">
                How it Works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-300">
              <div>
                <p className="text-3xl font-bold text-white">10+ yrs</p>
                <p className="text-sm">Industry Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm">NFPA 96 Compliant</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-sm">Emergency Service</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-500/40 to-cyan-500/40 border border-white/10 shadow-2xl backdrop-blur overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop" alt="Commercial kitchen" className="w-full h-full object-cover mix-blend-overlay" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 text-slate-800 rounded-xl p-4 shadow-xl border border-slate-200">
              <p className="font-semibold">Certified Techs</p>
              <p className="text-sm">Fully insured, photo reports included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
