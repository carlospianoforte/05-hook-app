import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useSatete/CounterApp'
import { CounterCustomHook } from './01-useSatete/CounterCustomHook'
import {HooksApp} from './HooksApp'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterCustomHook />
  </React.StrictMode>,
)
