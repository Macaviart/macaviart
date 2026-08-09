import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import PlaceholderImage from '../../components/PlaceholderImage'
import Lightbox from '../../components/Lightbox'
import BackButton from '../../components/BackButton'
import { getSerieBySlug, getImagenesSerie } from '../../data/obras'
import { usePageTitle } from '../../hooks/usePageTitle'

const areaDim = (dimensiones?: string | null) => {
  if (!dimensiones) return null
  const nums = dimensiones.match(/\d+/g)
  if (!nums || nums.length < 2) return null
  return Number(nums[0]) * Number(nums[1])
}

// Escala cada obra según su tamaño físico real, para que una pieza pequeña
// no se vea del mismo tamaño en pantalla que una pieza grande.
const ESCALA_MINIMA = 0.4

export default function SerieGaleria() {
  const { slug } = useParams<{ slug: string }>()
  const serie = slug ? getSerieBySlug(slug) : undefined
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  usePageTitle(serie ? `${serie.titulo} — Obras | Macaví` : 'Obras | Macaví')

  if (!serie) return <Navigate to="/obras" replace />

  const imagenes = getImagenesSerie(serie)
  const areaMaxima = Math.max(...imagenes.map((img) => areaDim(img.dimensiones) ?? 0), 1)

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <BackButton to="/obras" label="Volver a Obras" />
      <h1 className="text-center text-sm tracking-widest2 uppercase text-fog mb-12">
        {serie.titulo}
      </h1>
      {imagenes.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
          {imagenes.map((img, i) => {
            const area = areaDim(img.dimensiones)
            const escala = area ? Math.max(Math.sqrt(area / areaMaxima), ESCALA_MINIMA) : 1
            return (
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
                  style={{ maxWidth: `${escala * 100}%` }}
                  className="max-h-[420px] w-auto h-auto mx-auto border border-hairline"
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
            )
          })}
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
