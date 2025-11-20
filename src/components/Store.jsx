import { useEffect, useState } from 'react'

function Store() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const url = new URL(`${baseUrl}/api/products`)
        if (filter) url.searchParams.set('category', filter)
        const res = await fetch(url)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [filter])

  return (
    <section className="py-16 bg-white" id="store">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Professional Products</h2>
            <p className="mt-2 text-slate-600">Shop commercial-grade degreasers, filters, signage, and more.</p>
          </div>
          <select value={filter} onChange={(e)=>setFilter(e.target.value)} className="border rounded-md px-3 py-2 text-sm">
            <option value="">All Categories</option>
            <option value="degreasers">Degreasers</option>
            <option value="filters">Filters</option>
            <option value="signage">Signage</option>
            <option value="tools">Tools</option>
          </select>
        </div>

        {loading ? (
          <p className="text-slate-600">Loading products…</p>
        ) : items.length === 0 ? (
          <div className="text-slate-600">No products available yet. Check back soon!</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p)=> (
              <div key={p.id} className="border rounded-xl overflow-hidden bg-white shadow-sm">
                {p.image_url ? (
                  <img src={p.image_url} alt={p.title} className="w-full h-40 object-cover" />
                ) : (
                  <div className="w-full h-40 bg-slate-100 grid place-items-center text-slate-400">No image</div>
                )}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-slate-900">{p.title}</h3>
                  {p.description && <p className="mt-2 text-slate-600 text-sm">{p.description}</p>}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold text-slate-900">${Number(p.price).toFixed(2)}</span>
                    <button className="px-3 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Store
