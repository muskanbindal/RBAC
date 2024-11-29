import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/login`,
          { username, password }
        );
        const { token } = response.data;
        const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT token to extract user data
        const { role } = decoded;
  
        // Store both token and role in AuthContext
        login(token, role);
  
        navigate('/dashboard');
      } catch (err) {
        alert(err.response.data.message || 'Login failed');
      }
    };
  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
