"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'



export default function LoginPage(){
  const router = useRouter();
  const [user, setUser] = React.useState({

      email: "",
      password: "",
  });

  const onLogin = async () => {

      try {
        const response = await axios.post("/api/users/login", user)

      console.log("Login Success", response.data)
        router.push("/")
      } catch (error:any ) {
        console.log("login failed", error.message)
      }
  };

  return (
    <div className='flex flex-col items-center justified-center min-h-screen py-2 '>
        <h1 className='text-2xl font-bold	'>Login</h1>
        <br/>

        <label htmlFor='email'>
          Email
        </label>
        <input 
          className='p-2 border border-black rounded-lg mb-4 '
          id='email'
          type='text'
          value={user.email}
          onChange={(e) => setUser ({...user, email: e.target.value})}
          placeholder='Email'
        />

        <label htmlFor='password'>
          Password
        </label>
        <input 
          className='p-2 border border-black rounded-lg mb-4 '
          id='password'
          type='password'
          value={user.password}
          onChange={(e) => setUser ({...user, password: e.target.value})}
          placeholder='Password'
        />

        <button 
          className='p-2 border border-black rounded-lg mb-4 bg-green-500'
          onClick={onLogin}
          >
          Login Here
        </button>
        <Link href="/signup">Visit Signup Page</Link>
        
    </div>
  )
};

