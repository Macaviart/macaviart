import notaData from '../content/notaArtista.json'

export type Seccion = {
  tituloEs: string
  tituloEn: string
  epigrafeEs?: string
  epigrafeEn?: string
  parrafosEs: string[]
  parrafosEn: string[]
}

export const secciones: Seccion[] = notaData.secciones
