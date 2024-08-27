import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for styling

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/table">Table</Link>
        </li>
        <li className="nav-item">
          <Link to="/stopwatch">Stopwatch</Link>
        </li>
      </ul>
    </nav>
  );
};