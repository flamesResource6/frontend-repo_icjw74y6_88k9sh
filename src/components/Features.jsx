function Features() {
  const items = [
    {
      title: 'NFPA 96 Compliant',
      desc: 'Hood, duct, and fan cleaning with documented before/after photos.',
    },
    {
      title: 'Flexible Scheduling',
      desc: 'Overnight and off-hours service to keep your kitchen running.',
    },
    {
      title: 'Fire Risk Reduction',
      desc: 'We remove flammable grease to protect staff and property.',
    },
    {
      title: 'Professional Reporting',
      desc: 'Digital reports for insurance and fire inspector compliance.',
    },
    {
      title: 'Certified & Insured',
      desc: 'Experienced technicians with safety-first protocols.',
    },
    {
      title: 'Ottawa & Eastern ON',
      desc: 'Local, responsive team you can reach 24/7.',
    },
  ]

  return (
    <section id="how" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Why Restaurants Choose Us</h2>
          <p className="mt-3 text-slate-600">Trusted by kitchens across Ottawa and Eastern Ontario</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-slate-900">{it.title}</h3>
              <p className="mt-2 text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
