import React from 'react'
import "./profile.css"
export default function Profile() {
  return (
    <div className='bg-black h-screen px-[390px]'>
      <div>
        <img src="https://th.bing.com/th/id/OIP.-mvszAJlG1xnRUYispQk2AHaEK?w=310&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        className='w-full h-[300px]' />
      </div>
      <div className='flex justify-center '>
        <div className='absolute w-[160px] h-[160px] overflow-hidden rounded-full border-2 border-solid border-red-600 top-56 profile-image bg-center'>
      </div>
     </div>
     // Owner name and Chennal Name
     <div className='flex'>
        <div className=' justify-center text-red-300 w-1/2 py-5'>
           <div className='flex justify-center'>
                <h1 className='text-slate-500'>Owner :</h1>
           </div>
           <div className='flex justify-center'>
                <h1 className='text-red-shadow'>Dodge Motors</h1>
           </div>
        </div>
        <div className=' justify-center text-red-300 w-1/2 py-5'>
            <div className='flex justify-center'>
                    <h1 className='text-slate-500'> Chennal Name :</h1>
            </div>
            <div className='flex justify-center'>
                    <h1 className='text-red-shadow'>Race Car</h1>
            </div>
        </div>
     </div>
    // follwers and  Follwing with button
     <div className='flex'>
        <div className=' justify-center text-red-300 w-1/2 py-5'>
           <div className='flex justify-center'>
                <h1 className='text-red-shadow'>200k</h1>
           </div>
           <div className='flex justify-center'>
                <h1 className='text-slate-500'>Follwers</h1>
           </div>
        </div>
        <button className='h-8 px-7  rounded-md justify-center text-red-300  border-2 border-red-300 border-solid shadow-sm shadow-red-600 text-red-shadow'>follow</button>
        <div className=' justify-center text-red-300 w-1/2 py-5'>
            <div className='flex justify-center'>
                    <h1 className='text-red-shadow'>200</h1>
            </div>
            <div className='flex justify-center'>
                    <h1 className='text-slate-500'>Follwings</h1>
            </div>
        </div>
     </div>
    </div>
  )
}
