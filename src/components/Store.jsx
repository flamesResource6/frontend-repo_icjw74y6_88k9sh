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
        if (!res.ok) throw new Error('failed')
        const data = await res.json()
        const products = data.items && data.items.length ? data.items : [
          { id: 'p1', title: 'Heavy-Duty Degreaser', description: 'Commercial-strength concentrate for stainless and hoods.', price: 39.99, category: 'degreasers', image_url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1200&auto=format&fit=crop' },
          { id: 'p2', title: 'Baffle Hood Filter (20x20)', description: 'Dishwasher-safe, stainless steel replacement filter.', price: 59.0, category: 'filters', image_url: 'https://images.unsplash.com/photo-1582582429416-c43c2a3be7df?q=80&w=1200&auto=format&fit=crop' },
          { id: 'p3', title: 'Grease Containment Pads', description: 'Absorbent pads for rooftop fan grease management.', price: 29.5, category: 'tools', image_url: 'https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?q=80&w=1200&auto=format&fit=crop' },
          { id: 'p4', title: 'NFPA 96 Signage Pack', description: 'Compliance stickers and inspection log book.', price: 24.99, category: 'signage', image_url: 'https://images.unsplash.com/photo-1523475496153-3d6cc0d81031?q=80&w=1200&auto=format&fit=crop' },
          { id: 'p5', title: 'Fan Hinge Kit', description: 'Protects fan housing and roofing during service.', price: 89.99, category: 'tools', image_url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200&auto=format&fit=crop' },
          { id: 'p6', title: 'Filter Degreasing Tray', description: 'Soak and rinse station for back-of-house.', price: 119.0, category: 'tools', image_url: 'https://images.unsplash.com/photo-1481988535861-271139e06469?q=80&w=1200&auto=format&fit=crop' },
        ]
        setItems(products)
      } catch (e) {
        setItems([
          { id: 'p1', title: 'Heavy-Duty Degreaser', description: 'Commercial-strength concentrate for stainless and hoods.', price: 39.99, category: 'degreasers', image_url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1200&auto=format&fit=crop' },
          { id: 'p2', title: 'Baffle Hood Filter (20x20)', description: 'Dishwasher-safe, stainless steel replacement filter.', price: 59.0, category: 'filters', image_url: 'https://images.unsplash.com/photo-1582582429416-c43c2a3be7df?q=80&w=1200&auto=format&fit=crop' },
          { id: 'p3', title: 'Grease Containment Pads', description: 'Absorbent pads for rooftop fan grease management.', price: 29.5, category: 'tools', image_url: 'https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?q=80&w=1200&auto=format&fit=crop' },
          { id: 'p4', title: 'NFPA 96 Signage Pack', description: 'Compliance stickers and inspection log book.', price: 24.99, category: 'signage', image_url: 'https://images.unsplash.com/photo-1523475496153-3d6cc0d81031?q=80&w=1200&auto=format&fit=crop' },
          { id: 'p5', title: 'Fan Hinge Kit', description: 'Protects fan housing and roofing during service.', price: 89.99, category: 'tools', image_url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200&auto=format&fit=crop' },
          { id: 'p6', title: 'Filter Degreasing Tray', description: 'Soak and rinse station for back-of-house.', price: 119.0, category: 'tools', image_url: 'https://images.unsplash.com/photo-1481988535861-271139e06469?q=80&w=1200&auto=format&fit=crop' },
        ])
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
            <h2 className="text-3xl font-extrabold text-slate-900">Professional Products</h2>
            <p className="mt-2 text-slate-600">Commercial-grade supplies for safer, cleaner kitchens.</p>
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
              <div key={p.id} className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
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
                    <button className="px-3 py-2 rounded-md bg-red-600 text-white text-sm font-semibold hover:bg-red-700">Add to Cart</button>
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
