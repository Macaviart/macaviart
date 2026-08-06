import { Link } from 'react-router-dom'
import { artistaSubpaginas } from '../../data/artista'
import { usePageTitle } from '../../hooks/usePageTitle'

export default function ArtistaLanding() {
  usePageTitle('Artista | Macaví')
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 text-center">
      <h1 className="text-sm tracking-widest2 uppercase text-fog mb-8">Artista</h1>
      <nav className="flex flex-col items-center gap-4">
        {artistaSubpaginas.map((a) => (
          <Link
            key={a.slug}
            to={`/artista/${a.slug}`}
            className="text-lg text-ink hover:text-fog transition-colors"
          >
            {a.titulo}
          </Link>
        ))}
      </nav>
    </div>
  )
}
