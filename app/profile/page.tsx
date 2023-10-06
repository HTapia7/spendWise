"use client";
import axios from "axios"
import DisplayExpense from "../../components/DisplayExpenses.jsx"
import { useState } from 'react';

export default function ExpenseForm() {

  const [expenses, setExpenses] = useState([]);
  const [expenseData, setExpenseData] = useState({
    title: '',
    amount: '',
    date: '',
    category: 'fun', 
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('/api/expenses/add-Expense',
       expenseData);
  
      if (response.status === 200) {
       
        setExpenses([...expenses, response.data]);
        setExpenseData({
          title: '',
          amount: '',
          date: '',
          category: 'fun',
          description: '',
        });

        alert('Added your expense! :( ')
      } else {
        alert('Error adding expense. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="flex justify-center items-start min-h-screen py-2">
      <div className="w-1/2 px-4">
        <h1 className="text-2xl font-semibold mb-4">Add an Expense</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className="mb-2 block">
            Title:
          </label>
          <input
            className="p-2 border border-black rounded-lg mb-4 w-full"
            id="title"
            type="text"
            name="title"
            value={expenseData.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />

          <label htmlFor="amount" className="mb-2 block">
            Amount:
          </label>
          <input
            className="p-2 border border-black rounded-lg mb-4 w-full"
            id="amount"
            type="number"
            name="amount"
            value={expenseData.amount}
            onChange={handleChange}
            placeholder="Amount"
            required
          />

          <label htmlFor="date" className="mb-2 block">
            Date:
          </label>
          <input
            className="p-2 border border-black rounded-lg mb-4 w-full"
            id="date"
            type="date"
            name="date"
            value={expenseData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="category" className="mb-2 block">
            Category:
          </label>
          <select
            id="category"
            name="category"
            className="p-2 border border-black rounded-lg mb-4 w-full"
            value={expenseData.category}
            onChange={handleChange}
            required
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
            name="description"
            value={expenseData.description}
            onChange={handleChange}
            placeholder="Write a brief description"
            required
          />

          <button
            className="p-2 border border-black rounded-lg mb-4 bg-green-500"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-1/2 px-4">
        <DisplayExpense /> 
      </div>
    </div>
  );
};