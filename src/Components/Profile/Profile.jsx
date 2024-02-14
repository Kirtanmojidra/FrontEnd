import React, { useEffect } from 'react'
import "./profile.css"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateDataStore } from '../../Store/DataStore'
import { useNavigation } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
export default function  Profile() {
    const Dispatch = useDispatch()
    const Navigation = useNavigation()
    const {username} = useParams()
    let  data = useSelector((state)=>state.Data)
    const getData = async()=>{
        await axios.get("/api/v1/users/c/kirtan0001").then((res)=>console.log(res))
    }
    
    useEffect(()=>{
        getData()
        console.log("called")
    },[])
  return (
    <>
        <div className='bg-slate-900'>
        <div className='lg:px-[200px] bg-slate-900 h-fit w-screen pt-[25px] container-snap overflow-y-auto overflow-hidden' style={{ msOverflowStyle: 'none' }}>
            <div className='scale-95 container-snap'>
                {/* CoverImage */}
                <div>
                    <div className='flex justify-center'> 
                        <img src=""  alt="image" className='h-[250px] md:h-[300px] w-screen md:w-[650px] bg-slate-500'/>
                    </div>
                </div>
                {/* Avatar */}
                <div>
                    <div className='flex justify-center'>
                        <img src="" className='absolute h-[130px] w-[130px] md:h-[140px] md:w-[140px] top-[190px] md:top-[240px] rounded-full border-2 bg-slate-800' />
                    </div>
                </div>
                {/* Owner and Channle name */}
                <div className='w-full h-full flex justify-center container-snap'>
                    <div className='w-full flex justify-around pt-10 max-w-[700px]'>
                        <div className="pr-10">
                            <h1 className='text-slate-400 w-full flex justify-center'>Owner</h1>
                            <h1 className='text-orange-600 font-mono'>{data.fullname}</h1>
                        </div>
                        <div className='pl-20'>
                        <h1 className='text-slate-400 w-full flex justify-center'>Owner</h1>
                            <h1 className='text-orange-600 font-mono'>{data.username}</h1>
                        </div>
                    </div>
                </div>
                {/* Following Button */}
                <div className='w-full flex justify-center pt-5 container-snap' >
                    <button className='p-2 px-5 border-2 border-orange-600 text-orange-500 hover:text-black hover:bg-orange-600 hover:font-semibold scale-105'>Follow</button>
                </div>
                {/*Follower and Following List */}
                <div className='w-full h-full flex justify-center container-snap'>
                    <div className='w-full flex justify-around pt-10 max-w-[700px]'>
                        <div className="pr-10">
                            <h1 className='w-full flex justify-center text-orange-600 font-mono'>200k</h1>
                            <h1 className='text-slate-400'>Followers</h1>
                        </div>
                        <div className='pl-20'>
                            <h1 className='w-full flex justify-center text-orange-600 font-mono'>200</h1>
                            <h1 className='text-slate-400'>Followings</h1>   
                        </div>
                    </div>
                </div>
                {/*Video Heading */}
                <div className='flex justify-center pt-4 container-snap'>
                    <span className=' p-1 bg-slate-700 px-7 font-mono text-orange-600 rounded-tl-lg rounded-tr-lg'>Videos</span>
                </div>
                <div className='flex justify-center pb-2'>
                    <div className=' flex justify-center w-screen  h-[5px] bg-slate-700 mt-0 pt-0'></div>
                </div>
                
            </div>
        </div>
        {/*video Listing Start from here */}
        <div className='flex justify-center'>
        {/* Videos*/}
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
