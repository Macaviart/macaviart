import { notas } from '../../data/prensa'
import BackButton from '../../components/BackButton'
import { usePageTitle } from '../../hooks/usePageTitle'

export default function Prensa() {
  usePageTitle('Prensa | Macaví')
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-16">
      <BackButton to="/artista" label="Volver a Artista" />
      <h1 className="text-center text-sm tracking-widest2 uppercase text-fog mb-4">Prensa</h1>
      <p className="text-center text-xs text-stone-400 mb-16">
        {notas.length} publicaciones — 2004 a 2016
      </p>

      <div className="space-y-20">
        {notas.map((nota, i) => (
          <article key={i} className="border-b border-hairline pb-20 last:border-0">
            <div className="max-w-3xl mx-auto">
              <div
                className={`grid gap-6 mb-6 ${
                  nota.imagenes.length > 1 ? 'grid-cols-2' : 'max-w-xl mx-auto'
                }`}
              >
                {nota.imagenes.map((src, j) => (
                  <img
                    key={j}
                    src={src}
                    alt={nota.titulo}
                    loading="lazy"
                    className="w-full border border-hairline"
                  />
                ))}
              </div>

              <p className="text-xs uppercase tracking-wide text-stone-400">
                {nota.publicacion}
                {nota.fecha ? ` — ${nota.fecha}` : ''}
              </p>
              <a
                href={nota.url ?? nota.imagenes[0]}
                target="_blank"
                rel="noreferrer"
                className="block text-lg font-medium text-ink mt-1 hover:text-fog transition-colors"
              >
                {nota.titulo}
              </a>
              {nota.autor && <p className="text-xs text-stone-400 mt-1">{nota.autor}</p>}
              {nota.extracto && (
                <p className="text-sm text-fog leading-relaxed mt-3">{nota.extracto}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
