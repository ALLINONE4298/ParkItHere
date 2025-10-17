import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import HomePage from './pages/home/home.page'
import AboutPage from './pages/about/about.page'
import ContactPage from './pages/contact/contact.page'
import NotFoundPage from './pages/notFound/notFound.page'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
