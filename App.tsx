import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ExpenseReport from './components/ExpenseReport';

const App: React.FC = () => {
  // State to manage expenses in the App component
  const [expenses, setExpenses] = useState<any[]>([]);

  // Function to add a new expense
  const addExpense = (expense: any) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        {/* Pass expenses and addExpense as props to Home */}
        <Route path="/" element={<Home expenses={expenses} addExpense={addExpense} />} />
        <Route path="/about" element={<About />} />
        {/* Pass expenses to ExpenseReport */}
        <Route path="/reports" element={<ExpenseReport expenses={expenses} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
