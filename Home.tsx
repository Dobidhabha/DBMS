import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpenseReport from '../components/ExpenseReport';

// Define the structure of the expense object
interface Expense {
  amount: string;
  category: string;
  description: string;
  date: string;
}

// Define the props for the Home component
interface HomeProps {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
}

const Home: React.FC<HomeProps> = ({ expenses, addExpense }) => {
  return (
    <main>
      <h2>Track Your Expenses</h2>

      {/* Pass the addExpense function to ExpenseForm */}
      <ExpenseForm addExpense={addExpense} />

      {/* Pass expenses to ExpenseList to display them */}
      <ExpenseList expenses={expenses} />

      {/* Pass expenses to ExpenseReport for reporting */}
      <ExpenseReport expenses={expenses} />
    </main>
  );
};

export default Home;
