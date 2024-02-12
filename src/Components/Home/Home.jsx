import React from 'react'
import Navbar from '../Navbar/Navbar'
import { NavLink } from 'react-router-dom'
export default function Home() {
  return (
    <><Navbar/>
        <div className='bg-black w-screen'>
            <div className='flex w-screen justify-between p-5 py-10 lg:px-[100px] '>
                <div className='w-screen md:w-1/2'>
                    <div className='w-full'>
                        <h1 className='text-orange-500 flex justify-center text-2xl'>Introduse Let's Share It</h1>
                        <div className='w-full flex justify-center'>
                            <p className='p-2 text-slate-400 max-w-[400px]'>Lorem ipsum dolor sit
                                 amet, consectetur adig elit. Porro illum facere architecto asperior
                                    es nobis veniam at quod suscipit voluptatum it</p>
                        </div>
                        <div className='w-full flex justify-center mt-20'>
                            <NavLink to="/login" className='p-1 px-4 text-orange-600 border-2 border-solid border-orange-600 rounded-sm hover:bg-orange-600 hover:text-black hover:font-semibold hover:scale-105'>Get Started</NavLink>
                        </div>
                    </div>
                </div>

                <div className='w-1/2  justify-center place-items-center hidden md:flex'>
                    <h1 className='text-orange-500 text-2xl '>Let's Share It</h1>
                </div>
            </div>
        </div>
        <div className='bg-black w-screen lg:px-[90px]'>
            <div className='flex justify-center'>
                <span className='bg-slate-300 p-[5px] px-8 rounded-tr-lg rounded-tl-lg md:text-xl'>Featurs</span>
            </div>
            <div className='h-[2px] w-full bg-slate-300'></div>
            
            
            {/* Featurs*/}
            <div className='lg:flex p-2 lg:px-[50px] md:px-[100px]'>
                <div className='flex justify-center py-5'>
                    <img src="" className='w-[330px] h-[180px] md:w-[400px] md:h-[230px]  border-2 border-solid border-orange-600 rounded-lg' />
                </div>
                <div className='w-full p-2 px-3 md:px-20 lg:px-10 lg:py-5'>
                    <div className='w-full flex justify-center'>
                        <h1 className='text-orange-500 text-2xl mb-3'>Video Sharing</h1>
                    </div>
                    
                    <p className=' w-full text-slate-400 text-sm md:text-lg line-clamp-6'>Video sharing takes center stage with seamless and engaging experience. Users can effortlessly upload videos from their devices, sharing their content with the world. Customization options abound, allowing users to set privacy preferences, choose eye-catching thumbnails, and add descriptive elements like titles and tags. The community thrives through interactive features, including comments, likes, and reactions,</p>
                </div>
            </div>
            {/* Featurs*/}
            <div className='lg:flex p-2 lg:px-[50px] md:px-[100px]'>
                <div className='flex justify-center py-5'>
                    <img src="" className='w-[330px] h-[180px] md:w-[400px] md:h-[230px]  border-2 border-solid border-orange-600 rounded-lg' />
                </div>
                <div className='w-full p-2 px-3 md:px-20 lg:px-10 lg:py-5'>
                    <div className='w-full flex justify-center'>
                        <h1 className='text-orange-500 text-2xl mb-3'>Discover Content </h1>
                    </div>
                    
                    <p className=' w-full text-slate-400 text-sm md:text-lg line-clamp-6'> The access to a diverse range of videos is facilitated through a user-friendly and intuitive interface. Users can seamlessly explore an extensive library of content, spanning various genres and interests. The app employs robust discoverability features, including an advanced search functionality and curated content sections, ensuring that users can easily find videos aligned with their preferences. A personalized recommendation system enhances the browsing experience by suggesting videos based on a user's watch history and interactions. </p>
                </div>
            </div>
            {/* Featurs*/}
            <div className='lg:flex p-2 lg:px-[50px] md:px-[100px]'>
                <div className='flex justify-center py-5'>
                    <img src="" className='w-[330px] h-[180px] md:w-[400px] md:h-[230px]  border-2 border-solid border-orange-600 rounded-lg' />
                </div>
                <div className='w-full p-2 px-3 md:px-20 lg:px-10 lg:py-5'>
                    <div className='w-full flex justify-center'>
                        <h1 className='text-orange-500 text-2xl mb-3'>Watch-List</h1>
                    </div>
                    
                    <p className=' w-full text-slate-400 text-sm md:text-lg line-clamp-6'>The watchlist feature is enhances user experience by providing a personalized and organized way for users to curate and manage their preferred content. Users can easily add videos to their watchlist, creating a queue of content they intend to view later. The watchlist serves as a convenient hub for users to keep track of videos they find intriguing or plan to revisit. To enrich this experience, </p>
                </div>
            </div>
            {/* Featurs*/}
            <div className='lg:flex p-2 lg:px-[50px] md:px-[100px]'>
                <div className='flex justify-center py-5'>
                    <img src="" className='w-[330px] h-[180px] md:w-[400px] md:h-[230px]  border-2 border-solid border-orange-600 rounded-lg' />
                </div>
                <div className='w-full p-2 px-3 md:px-20 lg:px-10 lg:py-5'>
                    <div className='w-full flex justify-center'>
                        <h1 className='text-orange-500 text-2xl mb-3'> Watch History</h1>
                    </div>
                    
                    <p className=' w-full text-slate-400 text-sm md:text-lg line-clamp-6'> The watch history feature in your app plays a pivotal role in enhancing user experience by providing a chronological record of videos that a user has previously viewed. This feature allows users to effortlessly revisit content they've watched, facilitating a seamless and personalized viewing journey. Users can easily track their video consumption, making it convenient to resume watching from where they left off or explore related content based on their viewing patterns. The watch history feature not only serves as a practical tool for content recall but also enhances the app's recommendation algorithms</p>
                </div>
            </div>
            
        </div>
        
        <footer className=''>
            <div className='w-full md:flex md:justify-around bg-slate-800 px-5 py-5'>
                <h1 className=' text-orange-500 text-[20px] pt-2'>Developer Contect</h1>
                <div className='flex md:justify-center'>
                    <img src="" className='border-2 h-[50px] w-[50px] mx-2'/>
                    <img src="" className='border-2 h-[50px] w-[50px] mx-2'/>
                    <img src="" className='border-2 h-[50px] w-[50px] mx-2'/>
                </div>
                <div>
                    <h1 className='text-[21px] pt-2 text-green-500'>Kirtan Mojidra</h1>
                </div>
            </div>
        </footer>
    </>
  )
}
