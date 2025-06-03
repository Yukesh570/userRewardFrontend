import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Yuk from './demo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Yuk />
  </StrictMode>
)
