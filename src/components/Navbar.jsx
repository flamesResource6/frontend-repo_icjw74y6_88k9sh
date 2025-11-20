import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded bg-blue-600 text-white grid place-items-center font-bold shadow-md">CRS</div>
          <div className="leading-tight">
            <p className="font-bold text-slate-900">Canada CRS Waterworks</p>
            <p className="text-xs text-slate-500">Kitchen Exhaust Cleaning • Ottawa</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive})=>`hover:text-blue-600 ${isActive? 'text-blue-600 font-semibold':'text-slate-700'}`}>Home</NavLink>
          <NavLink to="/education" className={({isActive})=>`hover:text-blue-600 ${isActive? 'text-blue-600 font-semibold':'text-slate-700'}`}>Education</NavLink>
          <NavLink to="/store" className={({isActive})=>`hover:text-blue-600 ${isActive? 'text-blue-600 font-semibold':'text-slate-700'}`}>Store</NavLink>
          <a href="#contact" className="text-slate-700 hover:text-blue-600">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#quote" className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Get a Quote</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
