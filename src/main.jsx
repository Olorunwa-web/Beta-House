import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/AuthContext.jsx';
import './index.css'
import { Toaster } from 'react-hot-toast';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster/>
       <App />
    </AuthProvider>
  </StrictMode>,
)
