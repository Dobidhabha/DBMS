import React from 'react';
import '../styles/header.css'

const Header: React.FC = () => {
  return (
    <header>
      <h1>Expenses Management System</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;
