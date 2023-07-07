import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  //encierra la app en browserRouter para q funcione la conf
  <BrowserRouter>   
  <App />
  </BrowserRouter>,
  document.getElementById('root')
)
