import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LeftNavBar from '../Components/LeftNavBar/LeftNavBar.jsx'
import Profile from '../Components/Profile/Profile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LeftNavBar/>
    <Profile/>
  </React.StrictMode>,
)
