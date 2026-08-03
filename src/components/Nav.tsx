import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { series } from '../data/obras'
import { artistaSubpaginas } from '../data/artista'

const linkBase = 'text-sm tracking-wide transition-colors hover:text-ink'

function DesktopDropdown({
  label,
  to,
  items,
}: {
  label: string
  to: string
  items: { slug: string; titulo: string }[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${linkBase} flex items-center gap-1 ${isActive ? 'text-ink' : 'text-fog'}`
        }
      >
        {label}
        <ChevronDown size={14} className="mt-px" />
      </NavLink>
      {open && (
        <div className="absolute left-0 top-full pt-2 z-20">
          <div className="bg-white border border-hairline shadow-sm min-w-[220px] py-2">
            {items.map((item) => (
              <Link
                key={item.slug}
                to={`${to}/${item.slug}`}
                className="block px-5 py-2 text-sm text-ink hover:bg-stone-50"
              >
                {item.titulo}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="border-b border-hairline bg-white/95 backdrop-blur sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-24">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-logo text-4xl text-fog">macaví</span>
          <span className="text-[11px] tracking-widest2 uppercase text-stone-400 mt-1">
            Macarena Vicuña | Artista Visual
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${linkBase} ${isActive ? 'text-ink' : 'text-fog'}`}
          >
            Home
          </NavLink>
          <DesktopDropdown label="Obras" to="/obras" items={series} />
          <DesktopDropdown label="Artista" to="/artista" items={artistaSubpaginas} />
          <NavLink
            to="/clases"
            className={({ isActive }) => `${linkBase} ${isActive ? 'text-ink' : 'text-fog'}`}
          >
            Clases
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) => `${linkBase} ${isActive ? 'text-ink' : 'text-fog'}`}
          >
            Contacto
          </NavLink>
        </nav>

        <button
          className="md:hidden text-ink"
          aria-label="Abrir menú"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-hairline px-6 py-4 space-y-4">
          <Link to="/" className="block text-sm" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          <div>
            <Link to="/obras" className="block text-sm font-medium" onClick={() => setMobileOpen(false)}>
              Obras
            </Link>
            <div className="pl-4 mt-2 space-y-2">
              {series.map((s) => (
                <Link
                  key={s.slug}
                  to={`/obras/${s.slug}`}
                  className="block text-sm text-fog"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.titulo}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <Link to="/artista" className="block text-sm font-medium" onClick={() => setMobileOpen(false)}>
              Artista
            </Link>
            <div className="pl-4 mt-2 space-y-2">
              {artistaSubpaginas.map((a) => (
                <Link
                  key={a.slug}
                  to={`/artista/${a.slug}`}
                  className="block text-sm text-fog"
                  onClick={() => setMobileOpen(false)}
                >
                  {a.titulo}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/clases" className="block text-sm" onClick={() => setMobileOpen(false)}>
            Clases
          </Link>
          <Link to="/contacto" className="block text-sm" onClick={() => setMobileOpen(false)}>
            Contacto
          </Link>
        </div>
      )}
    </header>
  )
}
