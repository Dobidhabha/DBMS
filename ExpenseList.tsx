import React from 'react';
import '../styles/list.css';

interface Expense {
  amount: string;
  category: string;
  description: string;
  date: string;
}

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <div className="expense-list">
      {expenses.length > 0 ? (
        expenses.map((expense, index) => (
          <div key={index} className="expense-item">
            <span>{expense.date}</span>
            <span>${expense.amount}</span>
            <span>{expense.category}</span>
            <p>{expense.description}</p>
          </div>
        ))
      ) : (
        <p>No expenses added yet.</p>
      )}
    </div>
  );
};

export default ExpenseList;
