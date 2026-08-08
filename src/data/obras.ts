import obrasData from '../content/obras.json'

export type ImagenObra = {
  src: string
  titulo: string
  tecnica: string | null
  dimensiones: string | null
}

export type Serie = { slug: string; titulo: string; portada?: string; imagenes: ImagenObra[] }

export const series: Serie[] = obrasData.series as Serie[]

export const getSerieBySlug = (slug: string) => series.find((s) => s.slug === slug)

export const getImagenesSerie = (serie: Serie) => serie.imagenes

export const getPortadaSerie = (serie: Serie) => serie.portada ?? serie.imagenes[0]?.src
