import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Portfolioprovider } from './Usecontext.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Portfolioprovider>
    <App />

    </Portfolioprovider>
    
  </React.StrictMode>,
)
