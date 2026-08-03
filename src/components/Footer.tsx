import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-hairline mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-fog">
        <span>© {new Date().getFullYear()} Macaví — Macarena Vicuña</span>
        <div className="flex items-center gap-5">
          <a href="mailto:contacto@macaviart.cl" className="hover:text-ink transition-colors">
            contacto@macaviart.cl
          </a>
          <a
            href="https://instagram.com/macaviart"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-ink transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://facebook.com/macavicu"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-ink transition-colors"
          >
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
