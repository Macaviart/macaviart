type Props = {
  label?: string
  aspect?: string
  className?: string
}

// Marcador visual temporal. Se reemplaza por la imagen real de la obra cuando esté disponible.
export default function PlaceholderImage({ label, aspect = 'aspect-[4/3]', className = '' }: Props) {
  return (
    <div
      className={`${aspect} ${className} flex items-center justify-center bg-gradient-to-br from-stone-200 via-stone-100 to-stone-300 border border-hairline`}
    >
      <span className="text-xs tracking-widest2 uppercase text-stone-500 text-center px-4">
        {label ?? 'Imagen próximamente'}
      </span>
    </div>
  )
}
