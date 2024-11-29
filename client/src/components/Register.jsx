import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);  // Use context to handle login after registration
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // First, register the user
        const registerResponse = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/register`,
          { username, password, role }
        );

        if (registerResponse && registerResponse.data) {
          // If registration is successful, log the user in
          const loginResponse = await axios.post(
            `${import.meta.env.VITE_API_URL}/auth/login`,
            { username, password }
          );

          if (loginResponse && loginResponse.data) {
            const { token } = loginResponse.data;
            const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT token to extract user data
            const { role } = decoded;

            // Store token and role in AuthContext
            login(token, role);

            // Navigate to dashboard
            navigate('/dashboard');
          } else {
            alert('Login failed. Please try again.');
          }
        }
      } catch (err) {
        alert(err.response?.data?.message || 'Registration failed');
      }
    };
  
    return (
      <div className='register'>
        <h2>Register</h2>
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
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit">Register</button>
        </form>
      </div>
    );
};

export default Register;
