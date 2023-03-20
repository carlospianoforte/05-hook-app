import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useSatete/CounterApp'
import { CounterCustomHook } from './01-useSatete/CounterCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import {HooksApp} from './hooks/HooksApp'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
)
