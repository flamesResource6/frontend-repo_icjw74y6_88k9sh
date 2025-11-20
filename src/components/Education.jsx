import { useEffect, useState } from 'react'

function Education() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/articles`)
        const data = await res.json()
        setArticles(data.items || [])
      } catch (e) {
        setArticles([])
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
          <h2 className="text-3xl font-bold text-slate-900">Kitchen Exhaust Education</h2>
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
                  <div className="mt-3 text-xs text-blue-700/80 font-medium">{a.topic}</div>
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
