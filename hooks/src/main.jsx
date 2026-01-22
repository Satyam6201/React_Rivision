import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from './components/useContext/context/themeContext.jsx'

createRoot(document.getElementById('root')).render(
//  <App />

// useContext to rap the App
<ThemeContext>
    <App />
</ThemeContext>

)
