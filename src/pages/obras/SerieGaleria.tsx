import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import PlaceholderImage from '../../components/PlaceholderImage'
import Lightbox from '../../components/Lightbox'
import BackButton from '../../components/BackButton'
import { getSerieBySlug, getImagenesSerie } from '../../data/obras'
import { usePageTitle } from '../../hooks/usePageTitle'

export default function SerieGaleria() {
  const { slug } = useParams<{ slug: string }>()
  const serie = slug ? getSerieBySlug(slug) : undefined
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  usePageTitle(serie ? `${serie.titulo} — Obras | Macaví` : 'Obras | Macaví')

  if (!serie) return <Navigate to="/obras" replace />

  const imagenes = getImagenesSerie(serie)

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <BackButton to="/obras" label="Volver a Obras" />
      <h1 className="text-center text-sm tracking-widest2 uppercase text-fog mb-12">
        {serie.titulo}
      </h1>
      {imagenes.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
          {imagenes.map((img, i) => (
            <div key={img.src} className="mb-8 break-inside-avoid">
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="block w-full cursor-zoom-in text-center"
                aria-label={`Ampliar ${img.titulo || serie.titulo}`}
              >
                <img
                  src={img.src}
                  alt={img.titulo || `${serie.titulo} ${i + 1}`}
                  className="max-w-full max-h-[520px] w-auto h-auto mx-auto border border-hairline"
                  loading="lazy"
                />
              </button>
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

      {lightboxIndex !== null && (
        <Lightbox
          imagenes={imagenes}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </div>
  )
}
