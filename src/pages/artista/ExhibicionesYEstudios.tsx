import { categorias, type CvItem } from '../../data/exhibiciones'
import { usePageTitle } from '../../hooks/usePageTitle'

function Entry({ item, showYear }: { item: CvItem; showYear: boolean }) {
  return (
    <div className="flex gap-3 text-sm leading-relaxed">
      <span className="w-20 shrink-0 whitespace-nowrap text-stone-400">
        {showYear ? item.year : ''}
      </span>
      <span className="text-fog">
        <span className="font-medium text-ink">{item.title}, </span>
        {item.detail}
      </span>
    </div>
  )
}

export default function ExhibicionesYEstudios() {
  usePageTitle('Exhibiciones y Estudios | Macaví')
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <div className="text-center mb-16">
        <h1 className="text-sm tracking-widest2 uppercase text-fog">Macaví</h1>
        <p className="text-sm text-stone-500 mt-2">Macarena Vicuña. Santiago, Chile</p>
        <p className="text-sm text-stone-400 mt-1">
          contacto@macaviart.cl · www.macaviart.cl
        </p>
      </div>

      <div className="space-y-12">
        {categorias.map((c) => {
          let lastYear = ''
          return (
            <section key={c.tituloEs}>
              <div className="grid md:grid-cols-2 gap-x-16 mb-4">
                <h2 className="text-xs tracking-widest2 uppercase text-stone-400">
                  {c.tituloEs}
                </h2>
                <h2 className="text-xs tracking-widest2 uppercase text-stone-400">
                  {c.tituloEn}
                </h2>
              </div>
              <div className="space-y-1.5">
                {c.es.map((esItem, i) => {
                  const enItem = c.en[i]
                  const showYear = esItem.year !== lastYear
                  lastYear = esItem.year
                  return (
                    <div key={i} className="grid md:grid-cols-2 gap-x-16">
                      <Entry item={esItem} showYear={showYear} />
                      <Entry item={enItem} showYear={showYear} />
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
