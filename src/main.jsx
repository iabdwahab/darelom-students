import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { doc, setDoc } from 'firebase/firestore'
import { firebaseDB } from './utils/firebaseInit.js'
import { supabase } from './supabase/initializing.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App />
  // {/* </React.StrictMode>, */ }
)

document.documentElement.setAttribute('data-bs-theme', localStorage.getItem('theme') || 'light');
