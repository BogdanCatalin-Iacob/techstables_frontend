import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router'
import { CurrentUserProvider } from './contexts/CurrentUserContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <CurrentUserProvider>
                <App />
            </CurrentUserProvider>
        </Router>
    </StrictMode>,
)
