"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios  from 'axios'



const signUpPage = () => {

  const router = useRouter();
  const [user, setUser] = React.useState({
      email: "",
      password: "",
      username: "",
  });

  const [buttonDisabaled, setButtonDisabled] = React.useState(false);  
  const onSignup = async () => {

        try {
          const response = await axios.post("/api/users/signup", user)
          console.log("signup successful" , response.data);

          router.push("/login")


        } catch (error) {
          console.log("signup failed", error.message)
        }
  }







  return (
    <div className='flex flex-col items-center justified-center min-h-screen py-2 '>
        <h1 className='text-2xl font-bold	'>Sign Up</h1>
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

        <button 
          className='p-2 border border-black rounded-lg mb-4 bg-green-500'
          onClick={onSignup}
          >
          Sign Up Here
        </button>
        <Link href="/login">Visit Login Page</Link>
        
    </div>
  )
};

export default signUpPage
