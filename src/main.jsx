import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import Header  from './components/Header'

const root = createRoot(document.getElementById('root'))

// eslint-disable-next-line react-refresh/only-export-components
function App() {
    return (
        <div className="h-20">
            <Header />
        </div>
    )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)