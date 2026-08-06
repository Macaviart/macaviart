import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import homeData from '../content/home.json'

const slides = homeData.carrusel

export default function Home() {
  usePageTitle('Macaví | Macarena Vicuña, Artista Visual')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 pt-10 pb-20">
      <div className="relative">
        <img
          src={slides[index]}
          alt={`Obra destacada ${index + 1}`}
          className="aspect-[21/9] w-full object-cover border border-hairline"
        />
        <div className="absolute bottom-4 right-4 text-xs text-white/90 bg-black/30 px-2 py-1 rounded">
          {index + 1}/{slides.length}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a la imagen ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === index ? 'bg-ink' : 'bg-stone-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-16 text-center max-w-2xl mx-auto">
        <p className="text-fog leading-relaxed">{homeData.texto}</p>
        <Link
          to="/obras"
          className="inline-block mt-6 text-sm tracking-widest2 uppercase border-b border-ink pb-1 hover:opacity-70 transition-opacity"
        >
          Ver obras
        </Link>
      </div>
    </div>
  )
}
