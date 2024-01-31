import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar/Navbar'
import './index.css'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import NavBar from './Components/Profile/NavBar'
import Profile from './Components/Profile/Profile'
import WatchList from './Components/WatchList/WatchList'
import WatchHistory from './Components/WatchHistory/WatchHistory'
import ChannelList from './Components/ChannelList/ChannelList'
import {Route, RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Components/Profile/Layout/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='user' element={<Layout/>}>
          <Route path='profile/:username' element={<Profile/>}/>
          <Route path="watchHistory" element={<WatchHistory/>}/>
          <Route path='channel' element={<ChannelList/>}/>
          <Route path="watchList" element={<WatchList/>}/>
      </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>

  </React.StrictMode>,
)
