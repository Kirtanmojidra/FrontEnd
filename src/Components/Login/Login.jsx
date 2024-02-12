import React, { useState } from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateDataStore } from '../../Store/DataStore'
import Loader from '../Loader/Loader'
export default function Login() {
    const [isHidden , setIsHidden] = useState("password")
    const [loader,setLoader] = useState(false)
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ErrorMessage ,setErrorMessage] = useState("")
    const Dispatch = useDispatch()
    const Navigation = useNavigate()
    const isPasswordHidden = ()=>{
        if(isHidden == "password"){
            setIsHidden("text")
        }
        else{
            setIsHidden("password")
        }
    }
    const handleForm = async(e)=>{
        e.preventDefault()
        setLoader(true)
        if(username.length == 0 && email.length == 0){
            setErrorMessage("Username or Email is Requied .....")
        }
        else if(password.length == 0){
            setErrorMessage(": Enter Valid Password")
        }
        else {
            await axios.post(`/api/v1/users/login `,{
                username,email,password
            })
            .then((res)=>{console.log(res)
                const data = res.data.data.user
                Dispatch(updateDataStore(data))
                Navigation(`${`/user/profile/${username}`}`)    
                setLoader(false)
            })
            .catch((error)=>{console.log("Error :" +error)
                setLoader(false)
        })
        }
        setLoader(false)
    }
  return (
    <>
    <Loader loader={loader}/>
        <div className='w-screen h-screen flex'>
            <div className='w-1/2 hidden md:block bg-gradient-to-bl from-slate-900 from-10% via-slate-600 via-50% to-slate-400 to-100%'>
                <div className='w-full h-full flex justify-center place-items-center'>
                    <h1 className='text-4xl font-mono font-semibold text-orange-600'>Let's share It</h1>
                </div>
            </div>
            <div className='w-screen md:w-1/2 h-screen flex justify-center place-items-center bg-slate-700'>
                <div className='shadow-2xl shadow-orange-600 p-6 w-[350px] scale-90 md:scale-95 text-orange-500 border-2 border-solid border-orange-500'>
                    <div className='pb-5'>
                        <h1 className='text-2xl pb-3 font-mono'> Let's Share It </h1>
                        <h1 className='text-xl  font-mono text-fuchsia-600'>Login </h1>
                    </div>
                    <form>
                    <h2 className=''>Username :</h2>
                    <input type="text" placeholder='Username' className='w-full p-2 mb-3 rounded-md font-mono bg-black'  
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />    
                    
                    <h2>Email :</h2>
                    <input type="text" placeholder='Email' className='w-full p-2 mb-3 rounded-md font-mono  bg-black'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />

                    <h2>Password:</h2>

                    <div className='flex bg-black rounded-md'>
                        <input  type={isHidden} placeholder='Password'className='w-full p-2 mb-3 rounded-md font-mono  text-orange-600 bg-black outline-none' required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <button type="button" onClick={isPasswordHidden}  className='p-[2px] px-4 m-2 pt-0 bg-slate-400 rounded-tr-md rounded-br-md text-black font-semibold hover:scale-105'>show</button>
                    </div>
                    <h1 className='text-white p-1'>{ErrorMessage}</h1>
                         <div className='flex justify-end pt-5'>
                            <button type="submit" className='p-[7.5px] px-8  text-orange-600 border-2 border-orange-500 rounded-md hover:bg-orange-600  hover:text-black hover:font-semibold hover:font-mono hover:shadow-lg hover:shadow-slate-800'
                            onClick={handleForm}>Login</button>
                        </div>
                    </form>
                      <h1 className='p-1 pt-5'>If Are New To Here You Can Register <NavLink to="/register" className="text-semibold hover:text-blue-600 text-green-500">Here</NavLink></h1>  
                </div>
            </div>
        </div>
    </>
  )
}
