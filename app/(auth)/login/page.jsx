"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { axios } from 'axios'



const LoginPage = () => {

  const [user, setUser] = React.useState({
      password: "",
      username: "",
  });

  const onLogin = async () => {

  }

  return (
    <div className='flex flex-col items-center justified-center min-h-screen py-2 '>
        <h1 className='text-2xl font-bold	'>Login</h1>
        <br/>

        <label htmlFor='username'>
          Username
        </label>
        <input 
          className='p-2 border border-black rounded-lg mb-4 '
          id='username'
          type='text'
          value={user.username}
          onChange={(e) => setUser ({...user, username: e.target.value})}
          placeholder='Username'
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

export default LoginPage
