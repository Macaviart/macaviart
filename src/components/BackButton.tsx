import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

type BackButtonProps = {
  to: string
  label?: string
}

export default function BackButton({ to, label = 'Volver' }: BackButtonProps) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1 text-xs tracking-wide uppercase text-fog hover:text-ink transition-colors mb-8"
    >
      <ChevronLeft size={14} />
      {label}
    </Link>
  )
}
