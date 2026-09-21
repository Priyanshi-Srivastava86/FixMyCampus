import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">

        <div className="navbar-logo">
          <img src="/logo.jpg" alt="Fix My Campus Logo" />
        </div>

        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/reportissue">Report Issue</Link></li>
          <li><Link to="/trackproblem">Track Problems</Link></li>
          <li><Link to="/updates">Updates</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li className="btn">
            <Link to="/login">Login/Signup</Link>
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default Navbar;

