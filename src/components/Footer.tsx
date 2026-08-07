import contactoData from '../content/contacto.json'
import { getIconoRed } from '../lib/redSocial'

export default function Footer() {
  return (
    <footer className="border-t border-hairline mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-fog">
        <span>© {new Date().getFullYear()} Macaví — Macarena Vicuña</span>
        <div className="flex items-center gap-5">
          <a href={`mailto:${contactoData.email}`} className="hover:text-ink transition-colors">
            {contactoData.email}
          </a>
          {contactoData.redes.map((red) => {
            const Icono = getIconoRed(red.plataforma)
            return (
              <a
                key={red.url}
                href={red.url}
                target="_blank"
                rel="noreferrer"
                aria-label={red.plataforma}
                className="hover:text-ink transition-colors"
              >
                <Icono size={18} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
