import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { auth, logout } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        // Adjust the API URL based on user role
        const role = auth?.role;
        let url = `${import.meta.env.VITE_API_URL}/users/user`; // Default to 'user' route

        if (role === 'admin') {
          url = `${import.meta.env.VITE_API_URL}/users/admin`;
        } else if (role === 'manager') {
          url = `${import.meta.env.VITE_API_URL}/users/manager`;
        }

        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${auth.token}` },
        });

        setMessage(response.data.message); // Display role-specific message
      } catch (err) {
        alert('Unauthorized!');
      }
    };

    if (auth?.token) {
      fetchMessage(); // Fetch message when the token is available
    }
  }, [auth]);

  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      <p>{message}</p> {/* This will show the message based on role */}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;

