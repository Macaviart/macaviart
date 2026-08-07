import { Instagram, Facebook, Twitter, Youtube, Linkedin, Mail, Globe, MessageCircle, Music2 } from 'lucide-react'

export const iconosPorPlataforma = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
  linkedin: Linkedin,
  tiktok: Music2,
  whatsapp: MessageCircle,
  email: Mail,
  otro: Globe,
} as const

export type Plataforma = keyof typeof iconosPorPlataforma

export const getIconoRed = (plataforma: string) =>
  iconosPorPlataforma[plataforma as Plataforma] ?? Globe
