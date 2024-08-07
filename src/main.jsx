import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Template2 from './Template2.jsx'
import Template6 from './Template6.jsx'
import Template7 from './Template7.jsx'
import Template5 from './Template5.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Template2 />
    <Template6 />
    <Template7 />
    <Template5 />
  </React.StrictMode>,
)
