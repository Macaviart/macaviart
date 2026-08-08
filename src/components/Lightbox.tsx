import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { ImagenObra } from '../data/obras'

type LightboxProps = {
  imagenes: ImagenObra[]
  index: number
  onClose: () => void
  onIndexChange: (index: number) => void
}

export default function Lightbox({ imagenes, index, onClose, onIndexChange }: LightboxProps) {
  const img = imagenes[index]

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onIndexChange((index - 1 + imagenes.length) % imagenes.length)
      if (e.key === 'ArrowRight') onIndexChange((index + 1) % imagenes.length)
    }
    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [index, imagenes.length, onClose, onIndexChange])

  if (!img) return null

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 md:p-10"
      onClick={onClose}
    >
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white transition-colors"
      >
        <X size={28} />
      </button>

      {imagenes.length > 1 && (
        <>
          <button
            aria-label="Obra anterior"
            onClick={(e) => {
              e.stopPropagation()
              onIndexChange((index - 1 + imagenes.length) % imagenes.length)
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            aria-label="Obra siguiente"
            onClick={(e) => {
              e.stopPropagation()
              onIndexChange((index + 1) % imagenes.length)
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
          >
            <ChevronRight size={36} />
          </button>
        </>
      )}

      <img
        src={img.src}
        alt={img.titulo ?? ''}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[82vh] max-w-full object-contain"
      />

      {(img.titulo || img.tecnica || img.dimensiones) && (
        <div className="mt-4 text-center" onClick={(e) => e.stopPropagation()}>
          {img.titulo && <p className="text-sm text-white">{img.titulo}</p>}
          {(img.tecnica || img.dimensiones) && (
            <p className="text-xs text-white/60">
              {[img.tecnica, img.dimensiones].filter(Boolean).join(' ')}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
