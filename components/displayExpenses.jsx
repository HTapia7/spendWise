import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

const DisplayExpense = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/expenses/get-Expense');
        if (response.status === 200) {
          const data = response.data.expense;
          setExpenses(data);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Expense List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {expenses.map((expense) => (
          <div key={expense._id} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">{expense.title}</h3>
            <p className="text-gray-600 mb-2">Date: {expense.date}</p>
            <p className="text-gray-600 mb-2">Amount: ${expense.amount}</p>
            <p className="text-gray-600 mb-2">Category: {expense.category}</p>
            <p className="text-gray-600">Description: {expense.description}</p>

            <div className="flex space-x-2 mt-4">
              <button
              
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
              >
                <EditButton/>
              </button>
              <button
          
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
              >
                <DeleteButton/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayExpense;

