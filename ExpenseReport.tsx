import React from 'react';
import '../styles/report.css';

// Define the structure of the expense object
interface Expense {
  amount: string;
  category: string;
  description: string;
  date: string;
}

// Define the type for the props expected by ExpenseReport
interface ExpenseReportProps {
  expenses: Expense[];
}

const ExpenseReport: React.FC<ExpenseReportProps> = ({ expenses }) => {
  // Calculate the total amount spent
  const totalAmount = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  return (
    <div className="expense-report">
      <h3>Expense Report</h3>
      <p>Total Expenses: ${totalAmount.toFixed(2)}</p>
      {/* You can also add more detailed reporting logic here */}
    </div>
  );
};

export default ExpenseReport;
