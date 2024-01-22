import React from 'react'
import "./LeftNavBar.css"
export default function LeftNavBar() {
  return (
    <div className='flex absolute pl-[220px]'>
        <div className='p-1 flex justify-center flex-col  h-screen bg-black w-[170px] red-box-shadow'>
            <ul className=' text-red-500  '>
                <li className='py-3 px-[75px] flex justify-center w-full my-3 border-2 border-solid border-red-600 rounded-md red-text-box-shadow'>
                    <h1 className=' shadow-red-800 red-text-shadow'>MyProfile</h1>
                </li>
                <li className='py-3 px-[75px] flex justify-center w-full my-3 border-2 border-solid border-red-600 rounded-md red-text-box-shadow'>
                    <h1 className=' shadow-red-800 red-text-shadow'>WatchList</h1>
                </li>
                <li className='py-3 px-[75px] flex justify-center w-full my-3 border-2 border-solid border-red-600 rounded-md red-text-box-shadow'>
                    <h1 className=' shadow-red-800 red-text-shadow'>channels</h1>
                </li>
                <li className='py-3 px-[75px] flex justify-center w-full my-3 border-2 border-solid border-red-600 rounded-md red-text-box-shadow'>
                    <h1 className=' shadow-red-800 red-text-shadow'>WatchHistory</h1>
                </li>
            </ul>
        </div>
    </div>
  )
}

