import { useEffect, useState } from 'react'

function Education() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/articles`)
        if (!res.ok) throw new Error('failed')
        const data = await res.json()
        const items = data.items && data.items.length ? data.items : [
          { id: 'ph1', title: 'NFPA 96: What It Means for Your Kitchen', summary: 'A quick overview of compliance requirements and inspection points.', topic: 'Compliance', cover_image: 'https://images.unsplash.com/photo-1557124283-b93c14591658?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCZWZvcmUlMjAlMjYlMjBBZnRlciUzQSUyMFdoYXR8ZW58MHwwfHx8MTc2MzY2Mjk3M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
          { id: 'ph2', title: 'How Often Should You Clean Your Hood?', summary: 'Frequency guidance based on cuisine type and volume.', topic: 'Maintenance', cover_image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1200&auto=format&fit=crop' },
          { id: 'ph3', title: 'Before & After: What a Proper Clean Looks Like', summary: 'See what inspectors expect and how we document results.', topic: 'Safety', cover_image: 'https://images.unsplash.com/photo-1504711331083-9c895941bf81?q=80&w=1200&auto=format&fit=crop' },
        ]
        setArticles(items)
      } catch (e) {
        setArticles([
          { id: 'ph1', title: 'NFPA 96: What It Means for Your Kitchen', summary: 'A quick overview of compliance requirements and inspection points.', topic: 'Compliance', cover_image: 'https://images.unsplash.com/photo-1557124283-b93c14591658?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCZWZvcmUlMjAlMjYlMjBBZnRlciUzQSUyMFdoYXR8ZW58MHwwfHx8MTc2MzY2Mjk3M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
          { id: 'ph2', title: 'How Often Should You Clean Your Hood?', summary: 'Frequency guidance based on cuisine type and volume.', topic: 'Maintenance', cover_image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1200&auto=format&fit=crop' },
          { id: 'ph3', title: 'Before & After: What a Proper Clean Looks Like', summary: 'See what inspectors expect and how we document results.', topic: 'Safety', cover_image: 'https://images.unsplash.com/photo-1504711331083-9c895941bf81?q=80&w=1200&auto=format&fit=crop' },
        ])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">Kitchen Exhaust Education</h2>
          <p className="mt-2 text-slate-600">Best practices, safety, and compliance for commercial kitchens</p>
        </div>

        {loading ? (
          <p className="text-center text-slate-600">Loading resources…</p>
        ) : articles.length === 0 ? (
          <div className="text-center text-slate-600">
            <p>No articles yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((a) => (
              <article key={a.id} className="bg-white border rounded-xl overflow-hidden shadow-sm">
                {a.cover_image && (
                  <img src={a.cover_image} alt="" className="w-full h-40 object-cover" />
                )}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-slate-900">{a.title}</h3>
                  {a.summary && <p className="mt-2 text-slate-600 text-sm">{a.summary}</p>}
                  <div className="mt-3 text-xs text-rose-700/80 font-medium">{a.topic}</div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Education
