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
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
  <h1 className="text-5xl font-bold mb-6">Sign Up</h1>

  <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
    <label htmlFor="username" className="block text-xl font-semibold mb-3">
      Username
    </label>
    <input
      className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-lg focus:outline-none focus:ring focus:border-blue-500"
      id="username"
      type="text"
      value={user.username}
      onChange={(e) => setUser({ ...user, username: e.target.value })}
      placeholder="Username"
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

    <button
      className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 text-xl transition duration-300 ease-in-out"
      onClick={onSignup}
    >
      Sign Up Here
    </button>

    <p className="text-center text-gray-600 mt-4 text-xl">
      Already have an account?{' '}
      <Link href="/login" className="text-blue-500 hover:underline">
        Visit Login Page
      </Link>
    </p>
  </div>
</div>

  )
};

export default signUpPage
