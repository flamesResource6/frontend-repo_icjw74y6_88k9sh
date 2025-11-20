function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage:'radial-gradient(800px 400px at 20% 10%, #ef4444 20%, transparent 40%), radial-gradient(600px 300px at 80% -10%, #fb7185 15%, transparent 40%)'}} />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-widest text-xs text-rose-300/90">NFPA 96 • Certified • Insured</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Kitchen Exhaust Cleaning that Protects Your People and Property
            </h1>
            <p className="mt-6 text-lg text-slate-200">
              Ottawa and Eastern Ontario’s trusted team for compliant hood, duct, and fan cleaning. Detailed photo reports every visit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#quote" className="px-5 py-3 rounded-md bg-red-600 hover:bg-red-700 font-semibold shadow">
                Request Free Assessment
              </a>
              <a href="#how" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 font-semibold">
                How We Work
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-slate-300">
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
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-rose-500/40 to-red-500/40 border border-white/10 shadow-2xl backdrop-blur overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1600&auto=format&fit=crop" alt="Commercial kitchen" className="w-full h-full object-cover mix-blend-overlay" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 text-slate-800 rounded-xl p-4 shadow-xl border border-slate-200">
              <p className="font-semibold">Certified Techs</p>
              <p className="text-sm">Fully insured • Photo reports</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
