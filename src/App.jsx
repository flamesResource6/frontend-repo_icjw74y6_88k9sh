import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Education from './components/Education'
import Store from './components/Store'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Features />
      <Education />
      <Store />

      <footer className="bg-slate-900 text-slate-300 py-12" id="contact">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold text-lg">Canada CRS Waterworks</h4>
            <p className="text-slate-400 mt-2 text-sm">Commercial Kitchen Exhaust Cleaning • Ottawa, Canada</p>
          </div>
          <div>
            <h5 className="text-white font-semibold">Contact</h5>
            <p className="mt-2 text-sm">Email: info@crswaterworks.ca</p>
            <p className="text-sm">Phone: (613) 555-0123</p>
            <p className="text-sm">Ottawa, ON</p>
          </div>
          <div>
            <h5 className="text-white font-semibold">Hours</h5>
            <p className="mt-2 text-sm">Mon–Sun: 24/7 Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
