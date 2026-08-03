import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-6 py-24 text-center">
      <h1 className="text-sm tracking-widest2 uppercase text-fog mb-4">Página no encontrada</h1>
      <Link to="/" className="text-ink underline">
        Volver al inicio
      </Link>
    </div>
  )
}
