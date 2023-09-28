import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/expenses/get-Expense'
        );

        if (response.status === 200) {
    
          const data = response.data;

          // Check if data.expense is an array before setting the state
          if (Array.isArray(data.expense)) {
            setExpenses(data.expense);
          } else {
            console.error('Expense data from API is not an array:', data.expense);
          }
        }
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses(); // Call the function to fetch expenses when the component mounts
  }, []);

  return (
    <div>
      {expenses.map((expense) => (
        <div key={expense._id}>
          <h2>Title: {expense.title}</h2>
          <h2>Amount: {expense.amount}</h2>
        </div>
      ))}
    </div>
  );
};

export default DisplayExpenses;
