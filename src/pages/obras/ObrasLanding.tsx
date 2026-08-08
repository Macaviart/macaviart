import { Link } from 'react-router-dom'
import PlaceholderImage from '../../components/PlaceholderImage'
import { series, getImagenesSerie } from '../../data/obras'
import { usePageTitle } from '../../hooks/usePageTitle'

export default function ObrasLanding() {
  usePageTitle('Obras | Macaví')
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <h1 className="text-center text-sm tracking-widest2 uppercase text-fog mb-12">Obras</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {series.map((s) => {
          const portada = getImagenesSerie(s)[0]
          return (
            <Link key={s.slug} to={`/obras/${s.slug}`} className="group">
              {portada ? (
                <img
                  src={portada.src}
                  alt={s.titulo}
                  className="aspect-[4/3] w-full object-cover border border-hairline"
                  loading="lazy"
                />
              ) : (
                <PlaceholderImage label={s.titulo} aspect="aspect-[4/3]" />
              )}
              <p className="mt-3 text-sm tracking-wide text-ink group-hover:text-fog transition-colors">
                {s.titulo}
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
