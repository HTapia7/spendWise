"use client";
import axios from "axios"
import { useRouter } from "next/navigation";
import DisplayExpense   from "../../components/DisplayExpenses.jsx"


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
    <div className="flex justify-center items-start min-h-screen py-2">
    <div className="w-1/2 px-4">
    <h1 className="text-2xl font-semibold mb-4">Welcome</h1>
    <hr className="w-1/2 mb-4" />
    <button
      className="p-2 border border-black rounded-lg mb-4 bg-green-500"
      onClick={logout}
    >
      Logout
    </button>

    <div className="w-full">
      <label htmlFor="title" className="mb-2 block">
        Title:
      </label>
      <input
        className="p-2 border border-black rounded-lg mb-4 w-full"
        id="title"
        type="text"
        placeholder="Title"
      />

      <label htmlFor="amount" className="mb-2 block">
        Amount:
      </label>
      <input
        className="p-2 border border-black rounded-lg mb-4 w-full"
        id="amount"
        type="number"
        placeholder="Amount"
      />

      <label htmlFor="date" className="mb-2 block">
        Date:
      </label>
      <input
        className="p-2 border border-black rounded-lg mb-4 w-full"
        id="date"
        type="date"
      />

      <label htmlFor="category" className="mb-2 block">
        Category:
      </label>
      <select
        id="category"
        name="category"
        className="p-2 border border-black rounded-lg mb-4 w-full"
      >
        <option value="fun">Fun</option>
        <option value="bill">Bills</option>
        <option value="gas">Gas</option>
        <option value="food">Food</option>
        <option value="emergency">Emergency</option>
      </select>

      <label htmlFor="description" className="mb-2 block">
        Description:
      </label>
      <input
        className="p-2 border border-black rounded-lg mb-4 w-full"
        id="description"
        type="text"
        placeholder="Write a brief description"
      />

      <button
        className="p-2 border border-black rounded-lg mb-4 bg-green-500"
        type="submit"
      >
        Submit
      </button>
    </div>
  </div>


  <div className="w-1/2 px-4">
    <DisplayExpense />
  </div>
</div>

  )
};