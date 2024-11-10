import React from 'react';

interface Expense {
  amount: string;
  category: string;
  description: string;
  date: string;
}

interface ExpenseReportProps {
  expenses: Expense[];
}

const ExpenseReport: React.FC<ExpenseReportProps> = ({ expenses }) => {
  const totalAmount = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  return (
    <div className="expense-report">
      <h3>Expense Report</h3>
      <p>Total Expenses: ${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseReport;
