export type Serie = {
  slug: string
  titulo: string
  cantidadPlaceholder: number
  cantidadImagenes?: number
}

const imagenesSerie = (slug: string, cantidad: number) =>
  Array.from({ length: cantidad }, (_, i) => `/images/obras/${slug}/${slug}-${String(i + 1).padStart(2, '0')}.jpg`)

export const getImagenesSerie = (serie: Serie) =>
  serie.cantidadImagenes ? imagenesSerie(serie.slug, serie.cantidadImagenes) : []

// Series sin cantidadImagenes siguen mostrando placeholder hasta que Macarena envíe el material.
export const series: Serie[] = [
  { slug: 'botes', titulo: 'Botes', cantidadPlaceholder: 6, cantidadImagenes: 3 },
  { slug: 'caballos', titulo: 'Caballos', cantidadPlaceholder: 6, cantidadImagenes: 4 },
  { slug: 'instantes-permanentes', titulo: 'Instantes Permanentes', cantidadPlaceholder: 6, cantidadImagenes: 19 },
  { slug: 'figura-humana', titulo: 'Figura Humana', cantidadPlaceholder: 6, cantidadImagenes: 14 },
  { slug: 'de-norte-a-sur', titulo: 'De Norte a Sur', cantidadPlaceholder: 6, cantidadImagenes: 11 },
  { slug: 'esculturas', titulo: 'Esculturas', cantidadPlaceholder: 6, cantidadImagenes: 7 },
  { slug: 'grabados', titulo: 'Grabados', cantidadPlaceholder: 6, cantidadImagenes: 3 },
]

export const getSerieBySlug = (slug: string) => series.find((s) => s.slug === slug)
