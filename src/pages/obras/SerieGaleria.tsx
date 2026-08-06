import { useParams, Navigate } from 'react-router-dom'
import PlaceholderImage from '../../components/PlaceholderImage'
import { getSerieBySlug, getImagenesSerie } from '../../data/obras'

export default function SerieGaleria() {
  const { slug } = useParams<{ slug: string }>()
  const serie = slug ? getSerieBySlug(slug) : undefined

  if (!serie) return <Navigate to="/obras" replace />

  const imagenes = getImagenesSerie(serie)

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <h1 className="text-center text-sm tracking-widest2 uppercase text-fog mb-12">
        {serie.titulo}
      </h1>
      {imagenes.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
          {imagenes.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${serie.titulo} ${i + 1}`}
              className="w-full h-auto border border-hairline mb-8 break-inside-avoid"
              loading="lazy"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: serie.cantidadPlaceholder }).map((_, i) => (
            <PlaceholderImage key={i} label={`${serie.titulo} ${i + 1}`} aspect="aspect-[4/3]" />
          ))}
        </div>
      )}
    </div>
  )
}
