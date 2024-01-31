import React from 'react'
import {NavLink} from "react-router-dom"
export default function Navbar() {
  return (
      <div className='bg-black sticky w-screen md:px-5'>
        <div className='flex justify-between p-2'>
          <div className='font-mono md:text-xl text-orange-500 text-sm pt-2 md:pt-0'>
              Let's Share It
          </div>
          <div className='flex scale-90'>
              <NavLink to="register" className='p-1 px-5 mx-2 border-2 border-solid border-orange-500  text-white hover:bg-slate-200 hover:border-orange-600 hover:text-black hover:font-semibold'> Sign Up</NavLink>
              <NavLink to="login" className='p-1 px-5 border-2 border-solid border-white  text-orange-500 hover:bg-orange-600 hover:text-black hover:font-semibold'>Sign In</NavLink>
          </div>
        </div>
      </div>
  )
}
