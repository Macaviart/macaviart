import { FormEvent, useState } from 'react'
import { usePageTitle } from '../hooks/usePageTitle'
import contactoData from '../content/contacto.json'
import { getIconoRed } from '../lib/redSocial'
import BackButton from '../components/BackButton'

export default function Contacto() {
  usePageTitle('Contacto | Macaví')
  const [estado, setEstado] = useState<'idle' | 'enviando' | 'enviado' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEstado('enviando')
    const form = e.currentTarget
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${contactoData.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Nombre: (form.elements.namedItem('name') as HTMLInputElement).value,
          Email: (form.elements.namedItem('email') as HTMLInputElement).value,
          Mensaje: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
          _subject: 'Nuevo mensaje desde macaviart.cl',
        }),
      })
      if (!res.ok) throw new Error('request failed')
      setEstado('enviado')
      form.reset()
    } catch {
      setEstado('error')
    }
  }

  return (
    <div className="max-w-xl mx-auto px-6 md:px-10 py-16">
      <BackButton to="/" label="Volver al Inicio" />
      <h1 className="text-center text-sm tracking-widest2 uppercase text-fog mb-12">Contacto</h1>

      {estado === 'enviado' ? (
        <p className="text-center text-ink">¡Tus datos se enviaron con éxito!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-wide text-stone-500 mb-1">
              Nombre
            </label>
            <input
              type="text"
              name="name"
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
              name="email"
              required
              className="w-full border border-hairline px-3 py-2 text-sm focus:outline-none focus:border-ink"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wide text-stone-500 mb-1">
              Mensaje
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full border border-hairline px-3 py-2 text-sm focus:outline-none focus:border-ink"
            />
          </div>
          <button
            type="submit"
            disabled={estado === 'enviando'}
            className="w-full bg-ink text-white text-sm tracking-widest2 uppercase py-3 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {estado === 'enviando' ? 'Enviando...' : 'Enviar'}
          </button>
          {estado === 'error' && (
            <p className="text-center text-sm text-red-600">
              Hubo un error al enviar. Intenta de nuevo o escribe directo a {contactoData.email}.
            </p>
          )}
        </form>
      )}

      <div className="mt-14 flex flex-col items-center gap-3 text-fog text-sm">
        <a href={`mailto:${contactoData.email}`} className="hover:text-ink transition-colors">
          {contactoData.email}
        </a>
        <div className="flex items-center gap-5">
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
                <Icono size={20} />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
