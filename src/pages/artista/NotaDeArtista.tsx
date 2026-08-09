import { secciones } from '../../data/notaArtista'
import BackButton from '../../components/BackButton'
import { usePageTitle } from '../../hooks/usePageTitle'

export default function NotaDeArtista() {
  usePageTitle('Nota de Artista | Macaví')
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <BackButton to="/artista" label="Volver a Artista" />
      <h1 className="text-center text-sm tracking-widest2 uppercase text-fog mb-16">
        Nota de Artista
      </h1>

      <div className="space-y-14">
        {secciones.map((s) => (
          <section
            key={s.tituloEs}
            className="grid md:grid-cols-2 gap-x-10 md:divide-x md:divide-hairline"
          >
            <div className="md:pr-10">
              <h2 className="font-semibold uppercase text-ink mb-3">{s.tituloEs}</h2>
              {s.epigrafeEs && (
                <p className="italic text-sm text-stone-500 mb-4">{s.epigrafeEs}</p>
              )}
              <div className="space-y-4 text-sm text-fog leading-relaxed text-justify">
                {s.parrafosEs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="md:pl-10">
              <h2 className="font-semibold uppercase text-ink mb-3">{s.tituloEn}</h2>
              {s.epigrafeEn && (
                <p className="italic text-sm text-stone-500 mb-4">{s.epigrafeEn}</p>
              )}
              <div className="space-y-4 text-sm text-fog leading-relaxed text-justify">
                {s.parrafosEn.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
