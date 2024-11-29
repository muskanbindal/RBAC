import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <h2 className='primary'>Welcome to the RBAC Application</h2>
      <nav>
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </nav>
    </div>
  );
};

export default Home;
