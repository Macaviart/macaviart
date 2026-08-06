import obrasData from '../content/obras.json'

export type Serie = {
  slug: string
  titulo: string
  imagenes: string[]
}

export const series: Serie[] = obrasData.series

export const getSerieBySlug = (slug: string) => series.find((s) => s.slug === slug)

export const getImagenesSerie = (serie: Serie) => serie.imagenes
