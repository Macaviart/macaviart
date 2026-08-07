import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import homeData from '../content/home.json'

const slides = homeData.carrusel

const clasesTamano: Record<string, string> = {
  pequeño: 'text-sm',
  normal: 'text-base',
  grande: 'text-lg md:text-xl',
  'muy-grande': 'text-2xl md:text-3xl',
}

const clasesAlineacion: Record<string, string> = {
  izquierda: 'text-left',
  centro: 'text-center',
  derecha: 'text-right',
  justificado: 'text-justify',
}

const clasesTipografia: Record<string, string> = {
  sans: 'font-sans',
  serif: 'font-serif',
  cursiva: 'font-logo',
}

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

      <div className="mt-16 max-w-2xl mx-auto space-y-4">
        {homeData.parrafos.map((p, i) => (
          <p
            key={i}
            className={`leading-relaxed ${clasesTamano[p.tamano] ?? 'text-base'} ${
              clasesAlineacion[p.alineacion] ?? 'text-center'
            } ${clasesTipografia[p.tipografia] ?? 'font-sans'} ${p.negrita ? 'font-bold' : ''}`}
            style={{ color: p.color || undefined }}
          >
            {p.texto}
          </p>
        ))}
        <div className="text-center">
          <Link
            to="/obras"
            className="inline-block mt-2 text-sm tracking-widest2 uppercase border-b border-ink pb-1 hover:opacity-70 transition-opacity"
          >
            Ver obras
          </Link>
        </div>
      </div>
    </div>
  )
}
