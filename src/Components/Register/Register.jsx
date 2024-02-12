import React, { useState } from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { useNavigate } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'
import { updateDataStore } from '../../Store/DataStore'



export default function Register() {
    const [isHidden , setIsHidden] = useState("password")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [fullname, setFullname] = useState("")
    const [ErrorMassage, setErrorMessage] = useState("")
    const [loader ,setLoader] = useState(false)
    const Navigation = useNavigate()
    const  data = useSelector((state)=> state.Data)
    const Dispatch = useDispatch()

    const isPasswordHidden = ()=>{
        if(isHidden == "password"){
            setIsHidden("text")
        }
        else{
            setIsHidden("password")
        }
    }

    const handleForm = async(e)=>{
        setLoader(true)
        e.preventDefault()
        if(username.length < 5){
            setErrorMessage(": : lenght of username should be 5 or more : :")
        }
        else if(fullname.length < 5){
            setErrorMessage(": : lenght of Fullname should be 5 or more : :")
        }
        else if(password.length < 8){
            setErrorMessage(": : lenght of password should be 8 or more and should include number : :")
        }
        else if(email.length == 0){
            setErrorMessage(": : Enter Email : :")
        }
        else{
            await axios.post("/api/v1/users/register",
            {
                username,password,fullname,email
            }).then((res)=>{
                console.log(res)
                setLoader(false)
                Dispatch(updateDataStore({data: res.data.data}))
                Navigation(`${`/user/profile/${res.data.data.username}`}`) 
                
            }).catch(
                (error)=>{
                    console.log("error :"+error)
                    setLoader(false)
                }
            )

        }      
        setLoader(false)  
    }
  return (
    <>
        <Loader loader={loader}/>
        <div className={`w-screen h-screen flex ${loader?"blur-sm":" blur-none"}`}>
            <div className='w-1/2 hidden md:block bg-gradient-to-bl from-slate-900 from-10% via-slate-600 via-50% to-slate-400 to-100%'>
                <div className='w-full h-full flex justify-center place-items-center'>
                    <h1 className='text-4xl font-mono font-semibold text-orange-600'>Let's Share It</h1>
                </div>
            </div>
            <div className='w-screen md:w-1/2 h-screen flex justify-center place-items-center bg-slate-700'>
                <div className='shadow-2xl shadow-slate-500 hover:shadow-orange-600 p-6 w-[350px] scale-90 md:scale-95 text-orange-500 border-2 border-solid border-orange-500'>
                    <div className='pb-5'>
                        <h1 className='text-2xl pb-3 font-mono'> Let's Share It </h1>
                        <h1 className='text-xl font-mono text-fuchsia-600'>Create New Account </h1>
                    </div>
                    <form>
                    <h2 className=''>Username :</h2>
                    <input type="text" placeholder='Username' className='w-full p-2 mb-3 rounded-md font-mono bg-black' min={5} required
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />    
                    <h2>Fullname :</h2>
                    <input type="text" placeholder='Fullname' className='w-full p-2 mb-3 rounded-md font-mono  bg-black' min={5} required
                        value={fullname}
                        onChange={(e)=>setFullname(e.target.value)}
                    />

                    <h2>Email :</h2>
                    <input type="email" placeholder='Email' className='w-full p-2 mb-3 rounded-md font-mono  bg-black'  required 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <h2>Password:</h2>

                    <div className='flex bg-black rounded-md'>
                        <input  type={isHidden} placeholder='Password'className='w-full p-2 mb-3 rounded-md font-mono  text-orange-600 bg-black outline-none ' min="5" required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <button type="button" onClick={isPasswordHidden}  className='p-[2px] px-4 m-2 pt-0 bg-slate-400 rounded-tr-md rounded-br-md text-black font-semibold hover:scale-105'>show</button>
                    </div>
                        <h1 className='p-1 text-red-600 font-semibold'>{ErrorMassage}</h1>
                         <div className='flex justify-end pt-5'>
                            <button type="submit" className='p-[7.5px] px-8  text-orange-600 border-2 border-orange-500 rounded-md hover:bg-orange-600 hover:scale-105 hover:text-black hover:font-semibold hover:font-mono hover:shadow-lg hover:shadow-slate-900'
                                onClick={handleForm}
                            >Register</button>
                        </div>
                        <NavLink to="/login" className={`p-2 text-orange-600 text-lg hover:text-lime-400`}>Already Register</NavLink>
                    </form>
                      
                </div>
            </div>
        </div>
    </>
  )
}

