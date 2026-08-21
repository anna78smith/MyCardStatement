import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const expenses = ['Payment to Bank', 'Groceries', 'Utilities'];

  return (
    <ul className="expense-list">
      {expenses.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ExpenseList;
