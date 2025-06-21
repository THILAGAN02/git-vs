import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './hooks/UserContext.jsx'
import { ArrProvider } from './hooks/ArrContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ArrProvider>
          <App />
        </ArrProvider>  
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
)
