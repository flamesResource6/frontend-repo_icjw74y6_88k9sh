import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-red-600 to-rose-600 text-white grid place-items-center font-extrabold shadow-md">
            CRS
          </div>
          <div className="leading-tight">
            <p className="font-extrabold tracking-tight text-slate-900 group-hover:text-slate-950">Canada CRS Waterworks</p>
            <p className="text-xs text-slate-500">Commercial Kitchen Exhaust • Ottawa & Eastern ON</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive})=>`transition-colors hover:text-red-600 ${isActive? 'text-red-600 font-semibold':'text-slate-700'}`}>Home</NavLink>
          <a href="#how" className="text-slate-700 hover:text-red-600 transition-colors">Services</a>
          <NavLink to="/education" className={({isActive})=>`transition-colors hover:text-red-600 ${isActive? 'text-red-600 font-semibold':'text-slate-700'}`}>Education</NavLink>
          <NavLink to="/store" className={({isActive})=>`transition-colors hover:text-red-600 ${isActive? 'text-red-600 font-semibold':'text-slate-700'}`}>Store</NavLink>
          <a href="#contact" className="text-slate-700 hover:text-red-600 transition-colors">Contact</a>
        </nav>

        <div className="hidden sm:flex items-center gap-2">
          <a href="tel:+16135550123" className="hidden lg:inline-flex items-center justify-center px-3 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-semibold">(613) 555-0123</a>
          <a href="#quote" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition">Get a Quote</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
