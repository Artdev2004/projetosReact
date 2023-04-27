import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../src/components/HelloWorld'
import HelloWorld from '../src/components/HelloWorld'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld />
    <App /> 
  </React.StrictMode>,
)
