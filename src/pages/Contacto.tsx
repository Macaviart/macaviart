import { FormEvent, useState } from 'react'
import { Instagram, Facebook } from 'lucide-react'

// El envío aún no está conectado a ningún servicio (Formspree, etc.) — solo simula éxito.
// Conectar a un backend real antes de publicar el sitio.
export default function Contacto() {
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <div className="max-w-xl mx-auto px-6 md:px-10 py-16">
      <h1 className="text-center text-sm tracking-widest2 uppercase text-fog mb-12">Contacto</h1>

      {enviado ? (
        <p className="text-center text-ink">¡Tus datos se enviaron con éxito!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-wide text-stone-500 mb-1">
              Nombre
            </label>
            <input
              type="text"
              required
              className="w-full border border-hairline px-3 py-2 text-sm focus:outline-none focus:border-ink"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wide text-stone-500 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full border border-hairline px-3 py-2 text-sm focus:outline-none focus:border-ink"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wide text-stone-500 mb-1">
              Mensaje
            </label>
            <textarea
              required
              rows={5}
              className="w-full border border-hairline px-3 py-2 text-sm focus:outline-none focus:border-ink"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-ink text-white text-sm tracking-widest2 uppercase py-3 hover:opacity-90 transition-opacity"
          >
            Enviar
          </button>
        </form>
      )}

      <div className="mt-14 flex flex-col items-center gap-3 text-fog text-sm">
        <a href="mailto:contacto@macaviart.cl" className="hover:text-ink transition-colors">
          contacto@macaviart.cl
        </a>
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/macaviart"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-ink transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://facebook.com/macavicu"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-ink transition-colors"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
