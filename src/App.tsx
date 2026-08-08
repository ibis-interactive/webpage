import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PrivacyPage from './pages/PrivacyPage'
import DonPepePage from './pages/DonPepePage'

export default function App() {
  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/politicas-privacidad" element={<PrivacyPage />} />
    <Route path="/juegos/don-pepe-y-sus-globos" element={<DonPepePage />} />
    <Route path="*" element={<HomePage />} />
  </Routes>
}
