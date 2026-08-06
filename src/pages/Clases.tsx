import PlaceholderImage from '../components/PlaceholderImage'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Clases() {
  usePageTitle('Clases | Macaví')
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-16">
      <h1 className="text-center text-sm tracking-widest2 uppercase text-fog mb-12">Clases</h1>

      <div className="max-w-2xl mx-auto text-center text-fog leading-relaxed mb-12">
        <p>
          [Placeholder] Macarena dicta clases de pintura para distintos niveles. Aquí va la
          descripción real de modalidad, horarios y precios una vez definidos.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <PlaceholderImage key={i} label={`Clases ${i + 1}`} aspect="aspect-square" />
        ))}
      </div>
    </div>
  )
}
