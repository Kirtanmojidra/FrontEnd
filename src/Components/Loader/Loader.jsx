import React from 'react'

export default function Loader({loader}) {
    console.log(loader)
  return (
    
        <div className={`absolute h-screen w-screen top-0 z-30  ${loader?"block":"hidden"}`}>
            <div className='absolute w-screen top-1/2 z-50'>
                <div className='flex justify-center'>
                    <div style={{"border-top-color":"orange","border-left-color":"red","border-right-color":"black","border-bottom-color":"blue"}}
                    className="w-10 h-10 border-[10px] border-red-400 border-double rounded-full animate-spin"></div>
                    <h1 className='p-2 text-lg font-semibold text-orange-500'>Loading.....</h1>
                </div>
            </div>
        </div>
  )
}
