import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './pages/App'
import './main.css'
import Router from './router'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)