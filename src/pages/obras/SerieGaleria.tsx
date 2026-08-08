import { useParams, Navigate } from 'react-router-dom'
import PlaceholderImage from '../../components/PlaceholderImage'
import { getSerieBySlug, getImagenesSerie } from '../../data/obras'
import { usePageTitle } from '../../hooks/usePageTitle'

export default function SerieGaleria() {
  const { slug } = useParams<{ slug: string }>()
  const serie = slug ? getSerieBySlug(slug) : undefined

  usePageTitle(serie ? `${serie.titulo} — Obras | Macaví` : 'Obras | Macaví')

  if (!serie) return <Navigate to="/obras" replace />

  const imagenes = getImagenesSerie(serie)

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <h1 className="text-center text-sm tracking-widest2 uppercase text-fog mb-12">
        {serie.titulo}
      </h1>
      {imagenes.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
          {imagenes.map((img, i) => (
            <div key={img.src} className="mb-8 break-inside-avoid">
              <img
                src={img.src}
                alt={img.titulo || `${serie.titulo} ${i + 1}`}
                className="w-full h-auto border border-hairline"
                loading="lazy"
              />
              {(img.titulo || img.tecnica || img.dimensiones) && (
                <div className="mt-2 text-center">
                  {img.titulo && <p className="text-sm text-ink">{img.titulo}</p>}
                  {(img.tecnica || img.dimensiones) && (
                    <p className="text-xs text-fog">
                      {[img.tecnica, img.dimensiones].filter(Boolean).join(' ')}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <PlaceholderImage key={i} label={`${serie.titulo} ${i + 1}`} aspect="aspect-[4/3]" />
          ))}
        </div>
      )}
    </div>
  )
}
