export type Serie = {
  slug: string
  titulo: string
  cantidadPlaceholder: number
}

// Reemplazar cantidadPlaceholder e imágenes reales cuando Macarena envíe el material.
export const series: Serie[] = [
  { slug: 'parejas', titulo: 'Parejas', cantidadPlaceholder: 6 },
  { slug: 'botes', titulo: 'Botes', cantidadPlaceholder: 6 },
  { slug: 'caballos', titulo: 'Caballos', cantidadPlaceholder: 6 },
  { slug: 'instantes-permanentes', titulo: 'Instantes Permanentes', cantidadPlaceholder: 6 },
  { slug: 'figura-humana', titulo: 'Figura Humana', cantidadPlaceholder: 6 },
  { slug: 'de-norte-a-sur', titulo: 'De Norte a Sur', cantidadPlaceholder: 6 },
  { slug: 'esculturas', titulo: 'Esculturas', cantidadPlaceholder: 6 },
  { slug: 'grabados', titulo: 'Grabados', cantidadPlaceholder: 6 },
]

export const getSerieBySlug = (slug: string) => series.find((s) => s.slug === slug)
