import React, { useState } from 'react';
import '../styles/form.css'

// Define the type for the expense object
interface Expense {
  amount: string;
  category: string;
  description: string;
  date: string;
}

// Define the type for the props
interface ExpenseFormProps {
  addExpense: (expense: Expense) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ addExpense }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newExpense = { amount, category, description, date };
    addExpense(newExpense); // Pass the new expense to the parent
    setAmount('');
    setCategory('');
    setDescription('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
