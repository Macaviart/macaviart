import PlaceholderImage from '../components/PlaceholderImage'
import BackButton from '../components/BackButton'
import { usePageTitle } from '../hooks/usePageTitle'
import clasesData from '../content/clases.json'

export default function Clases() {
  usePageTitle('Clases | Macaví')
  const imagenes = clasesData.imagenes

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-16">
      <BackButton to="/" label="Volver al Inicio" />
      <h1 className="text-center text-sm tracking-widest2 uppercase text-fog mb-12">Clases</h1>

      <div className="max-w-2xl mx-auto text-fog leading-relaxed mb-12 space-y-4">
        {clasesData.parrafos.map((p, i) => (
          <p key={i} className={p.negrita ? 'font-semibold text-ink' : ''}>
            {p.texto}
          </p>
        ))}
      </div>

      {clasesData.horarios.length > 0 && (
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="text-sm tracking-widest2 uppercase text-fog mb-4">Horarios</h2>
          <ul className="space-y-2 text-fog leading-relaxed">
            {clasesData.horarios.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {imagenes.length > 0
          ? imagenes.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Clases ${i + 1}`}
                className="aspect-square w-full object-cover border border-hairline"
                loading="lazy"
              />
            ))
          : Array.from({ length: 6 }).map((_, i) => (
              <PlaceholderImage key={i} label={`Clases ${i + 1}`} aspect="aspect-square" />
            ))}
      </div>
    </div>
  )
}
