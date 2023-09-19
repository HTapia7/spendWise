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
    <div className='flex flex-col items-center justified-center min-h-screen py-2'>

      <h1>Profile</h1>
      <p>Profile page</p>


    <hr/>

    <button 
          className='p-2 border border-black rounded-lg mb-4 bg-green-500'
          onClick={logout}
          >
          Logout
        </button>
    </div>
  )
};

