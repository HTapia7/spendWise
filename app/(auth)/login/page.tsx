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
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
    <h1 className="text-5xl font-bold mb-6">Login</h1>

  <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
    <label htmlFor="email" className="block text-xl font-semibold mb-3">
      Email
    </label>
    <input
      className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-lg focus:outline-none focus:ring focus:border-blue-500"
      id="email"
      type="text"
      value={user.email}
      onChange={(e) => setUser({ ...user, email: e.target.value })}
      placeholder="Email"
    />

    <label htmlFor="password" className="block text-xl font-semibold mb-3">
      Password
    </label>
    <input
      className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-lg focus:outline-none focus:ring focus:border-blue-500"
      id="password"
      type="password"
      value={user.password}
      onChange={(e) => setUser({ ...user, password: e.target.value })}
      placeholder="Password"
    />

    <button
      className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 text-xl transition duration-300 ease-in-out"
      onClick={onLogin}
    >
      Login Here
    </button>

    <p className="text-center text-gray-600 mt-4 text-xl">
      Don't have an account?{' '}
      <Link href="/signup" className="text-blue-500 hover:underline">
        Visit Signup Page
      </Link>
    </p>
  </div>
</div>

  );
};

