"use client";
import axios from "axios"
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function ProfilePage() {

  const router = useRouter();

  const logout = async() => {

    try {
      const response = await axios.get("/api/users/logout")
      router.push("/login")

    } catch (error: any ) {
      console.log(error.message)
    }
  }

  return (
    <div className='flex flex-col items-center justified-center min-h-screen py-2 '>

        <h1>Welcome</h1>
        <hr/>
        <button 
            className='p-2 border border-black rounded-lg mb-4 bg-green-500 '
            onClick={logout}
            >
            Logout
        </button>

      <div className='flex flex-col items-center justified-start min-h-screen py-2 '>
        <label htmlFor='title'>
              Title: 
            </label>
            <input 
              className='p-2 border border-black rounded-lg mb-4 '
              id='title'
              type='text'
              // value={}
              placeholder='Title'
        />

        <label htmlFor='amount'>
              Amount: 
        </label>
            <input 
              className='p-2 border border-black rounded-lg mb-4 '
              id='amount'
              type='number'
              // value={}
              placeholder='Amount'
        />

        <label htmlFor='date'>
              Date: 
        </label>
            <input 
              className='p-2 border border-black rounded-lg mb-4 '
              id='date'
              type='date'
              // value={}
        />

        <label htmlFor='category'>
              Category: 
        </label>
        <select id="category" name="category" className="p-2 border border-black rounded-lg mb-4 ">
          <option value="fun">Fun</option>
          <option value="bill">Bills</option>
          <option value="gas">Gas</option>
          <option value="food">Food</option>
        </select>

        <label htmlFor='description'>
              Description: 
        </label>
            <input 
              className='p-2 border border-black rounded-lg mb-4 '
              id='description'
              type='text'
              // value={}
              placeholder='Write a brief description'
        />

        <button 
          className='p-2 border border-black rounded-lg mb-4 bg-green-500'
          // onClick={onLogin}
          >
          Submit
        </button>

      </div>
    </div>
  )
};