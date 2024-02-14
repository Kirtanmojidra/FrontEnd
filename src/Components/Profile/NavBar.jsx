import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./profile.css"
export default function NavBar() {
    const [isNavBarToggle ,setIsNavBarToggle] = useState(false)
    const navBarToggle = ()=>{
        if(isNavBarToggle == true){
            setIsNavBarToggle(false)
        }
        else{
            setIsNavBarToggle(true)
        }
    }
  return (
    <div className='bg-slate-900 z-20 container-snap'>
      <nav className='w-screen h-[48px] bg-slate-800 fixed z-50 container-snap'>
        <div className='w-full flex'>
            <div className='w-full'>
                <h1 className='p-3 text-orange-500 font-mono text-lg'> Let's Share It</h1>
            </div>
            <div className='flex w-fit justify-end px-6 pb-2'>
                <button className=' text-orange-500' onClick={navBarToggle}>{isNavBarToggle ? "X" : "||||"}</button>
            </div>
        </div>
        <div className={`${isNavBarToggle ? "" : "hidden"} absolute justify-end bg-slate-800 p-2 px-10 right-0 top-12 w-full max-w-[500px] rounded-bl-lg rounded-tl-lg  z-20`}>
            <ul className='p-2' 
            onClick={navBarToggle}>
                <NavLink to="/user/profile" className='p-2 text-orange-600 border-2 border-solid border-orange-600 px-10 m-2 hover:bg-orange-600 hover:text-black hover:font-mono hover:font-semibold hover:scale-105 flex justify-center'>MyProfile</NavLink>
                <NavLink to="/user/watchList" className='p-2 text-orange-600 border-2 border-solid border-orange-600 px-10 m-2 hover:bg-orange-600 hover:text-black hover:font-mono hover:font-semibold hover:scale-105 flex justify-center'>WatchList</NavLink>
                <NavLink to="/user/WatchHistory" className='p-2 text-orange-600 border-2 border-solid border-orange-600 px-10 m-2 hover:bg-orange-600 hover:text-black hover:font-mono hover:font-semibold hover:scale-105 flex justify-center'>WatchHistory</NavLink>
                <NavLink to="/user/channel" className='p-2 text-orange-600 border-2 border-solid border-orange-600 px-10 m-2 hover:bg-orange-600 hover:text-black hover:font-mono hover:font-semibold hover:scale-105 flex justify-center'>Channels</NavLink>
            </ul>
        </div>
      </nav>
      <div>

      </div>
    </div>
  )
}
