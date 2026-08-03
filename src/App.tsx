import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Clases from './pages/Clases'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import ObrasLanding from './pages/obras/ObrasLanding'
import SerieGaleria from './pages/obras/SerieGaleria'
import ArtistaLanding from './pages/artista/ArtistaLanding'
import NotaDeArtista from './pages/artista/NotaDeArtista'
import ExhibicionesYEstudios from './pages/artista/ExhibicionesYEstudios'
import Prensa from './pages/artista/Prensa'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="obras" element={<ObrasLanding />} />
        <Route path="obras/:slug" element={<SerieGaleria />} />
        <Route path="artista" element={<ArtistaLanding />} />
        <Route path="artista/nota-de-artista" element={<NotaDeArtista />} />
        <Route path="artista/exhibiciones-y-estudios" element={<ExhibicionesYEstudios />} />
        <Route path="artista/prensa" element={<Prensa />} />
        <Route path="clases" element={<Clases />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
