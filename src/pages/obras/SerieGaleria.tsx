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

// Altura en cm (primer número de "alto x ancho"), para las galerías por filas.
const altoDim = (dimensiones?: string | null) => {
  const n = dimensiones?.match(/\d+/)
  return n ? Number(n[0]) : null
}

// Escala de pantalla en las filas: 1 cm de obra = 0,21% del ancho del contenedor.
const CM_A_CQW = 0.21

export default function SerieGaleria() {
  const { slug } = useParams<{ slug: string }>()
  const serie = slug ? getSerieBySlug(slug) : undefined
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  usePageTitle(serie ? `${serie.titulo} — Obras | Macaví` : 'Obras | Macaví')

  if (!serie) return <Navigate to="/obras" replace />

  const imagenes = getImagenesSerie(serie)
  const areaMaxima = Math.max(...imagenes.map((img) => areaDim(img.dimensiones) ?? 0), 1)
  const porFilas = imagenes.length > 0 && imagenes.every((img) => img.fila !== undefined)
  const filas: { img: (typeof imagenes)[number]; i: number }[][] = []
  if (porFilas) {
    imagenes.forEach((img, i) => {
      const idx = (img.fila as number) - 1
      ;(filas[idx] ??= []).push({ img, i })
    })
  }

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <BackButton to="/obras" label="Volver a Obras" />
      <h1 className="text-center text-sm tracking-widest2 uppercase text-fog mb-12">
        {serie.titulo}
      </h1>
      {porFilas ? (
        <div className="flex flex-col gap-10 sm:gap-14 [container-type:inline-size]">
          {filas.filter(Boolean).map((fila, f) => (
            <div
              key={f}
              className="flex flex-col sm:flex-row sm:justify-center sm:items-end gap-10 sm:gap-8"
            >
              {fila.map(({ img, i }) => {
                const area = areaDim(img.dimensiones)
                const escala = area ? Math.max(Math.sqrt(area / areaMaxima), ESCALA_MINIMA) : 1
                const alto = altoDim(img.dimensiones)
                return (
                  <div key={img.src} className="text-center">
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(i)}
                      className="block mx-auto cursor-zoom-in"
                      aria-label={`Ampliar ${img.titulo || serie.titulo}`}
                    >
                      <img
                        src={img.src}
                        alt={img.titulo || `${serie.titulo} ${i + 1}`}
                        style={
                          {
                            '--mw': `${escala * 100}%`,
                            '--h': alto ? `calc(${alto * CM_A_CQW}cqw)` : 'auto',
                          } as React.CSSProperties
                        }
                        className="max-h-[420px] max-w-[var(--mw)] w-auto h-auto mx-auto border border-hairline sm:max-h-none sm:max-w-none sm:h-[var(--h)]"
                        loading="lazy"
                      />
                    </button>
                    <div className="mt-2">
                      {img.titulo && <p className="text-sm text-ink">{img.titulo}</p>}
                      {(img.tecnica || img.dimensiones) && (
                        <p className="text-xs text-fog">
                          {[img.tecnica, img.dimensiones].filter(Boolean).join(' ')}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      ) : imagenes.length > 0 ? (
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
