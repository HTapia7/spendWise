"use client"
import ExpenseForm from '../../components/ExpenseForm.jsx'
import DisplayExpenese from '../../components/DisplayExpenses.jsx'
import React from 'react'

const page = () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-4">
        <ExpenseForm />
      </div>
      <div className="w-1/2 pl-4">
        <DisplayExpenese />
      </div>
    </div>
  );
};

export default page
