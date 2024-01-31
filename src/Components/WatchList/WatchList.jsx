import React from 'react'

export default function WatchList() {
  return (
    <>
       <div className='pt-[46px] bg-slate-900 min-h-[100vh] '>
        <div className='flex justify-center pt-5 '>
            <span className='bg-slate-700 p-1 px-5 rounded-tr-md rounded-tl-md text-orange-600'>Watch List</span>
        </div>
        <div className='flex justify-center '>
            <div className='max-w-[670px] w-full h-[4px] bg-slate-700'>

            </div>
        </div>
        {/* Video Listing ...... */}
        <div className='flex justify-center pt-5 w-full'>
           {/*video*/}
           <div className="container mx-auto p-4 bg-slate-900 ml-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            {[1, 2, 3, 4].map((id) => (
            <div key={id} className="max-w-sm rounded overflow-hidden shadow-md mx-auto">
                <img src={`https://wallpapercave.com/wp/wp7403108.jpg`} alt={`Video ${id}`} className="w-full h-48 object-cover border-2" />
                <div className="py-3">
                    <div className='flex'>
                        <div className='p-1 pr-5'>
                            <img src="" className='w-[60px] h-[60px] rounded-full p-2 border-2' />
                        </div>
                        <div className="font-bold text-lg mb-2">
                            <h1 className='text-slate-300 line-clamp-2'>Dodge Motors Videos Makers jsjd jhs uhj sjkdhj</h1>
                            <p className="text-gray-500 text-base">Dodge Motors</p>
                                <div className='flex start text-slate-500'>
                                    <p className='pr-10'>views</p>
                                    <p>Likes</p>
                                </div>
                        </div>           
                    </div>
                </div>
            </div>
            ))}
        </div>
        </div>
        </div>
    </div>
    </>
  )
}
