import { useState } from 'react'

function QuoteForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service_address: '', preferred_time: '', message: ''
  })
  const [status, setStatus] = useState({ type: 'idle', msg: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', msg: 'Sending…' })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ type: 'success', msg: 'Thanks! We will contact you shortly.' })
      setForm({ name: '', email: '', phone: '', company: '', service_address: '', preferred_time: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', msg: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section id="quote" className="py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Request a Quote</h2>
        <p className="mt-2 text-slate-600 text-center">Tell us about your kitchen and preferred timing.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-xl border shadow-sm">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="border rounded-md px-3 py-2" required />
          <input name="company" value={form.company} onChange={handleChange} placeholder="Company / Restaurant" className="border rounded-md px-3 py-2" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" className="border rounded-md px-3 py-2" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border rounded-md px-3 py-2" />
          <input name="service_address" value={form.service_address} onChange={handleChange} placeholder="Service address" className="border rounded-md px-3 py-2 sm:col-span-2" />
          <input name="preferred_time" value={form.preferred_time} onChange={handleChange} placeholder="Preferred service time (e.g., overnight)" className="border rounded-md px-3 py-2 sm:col-span-2" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Project details" rows="4" className="border rounded-md px-3 py-2 sm:col-span-2" />
          <div className="sm:col-span-2 flex items-center gap-4">
            <button disabled={status.type==='loading'} className="px-5 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60">
              {status.type==='loading' ? 'Sending…' : 'Submit Request'}
            </button>
            {status.type==='success' && <span className="text-green-700">{status.msg}</span>}
            {status.type==='error' && <span className="text-red-600">{status.msg}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default QuoteForm
