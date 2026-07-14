import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { DarkModeProvider } from '@context/DarkModeContext'
import App from './App.jsx'
import '@styles/index.css'
import 'aos/dist/aos.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
