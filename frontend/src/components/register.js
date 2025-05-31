import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Simulasi register (bisa diganti dengan request ke backend)
    // localStorage.setItem('registeredEmail', email);
    // localStorage.setItem('registeredPassword', password);

    setSuccess('Register successful! Redirecting to login...');
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  const containerStyle = {
    backgroundColor: '#1e1e1e',
    color: '#f0f0f0',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  const formStyle = {
    backgroundColor: '#333',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    width: '80%',
    maxWidth: '400px',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#ddd',
  };

  const fieldStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#bbb',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #555',
    borderRadius: '4px',
    backgroundColor: '#444',
    color: '#f0f0f0',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  };

  const errorStyle = {
    color: '#f44336',
    marginBottom: '10px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleRegister}>
        <h2 style={headingStyle}>Register</h2>
        {error && <p style={errorStyle}>{error}</p>}
        {success && <p style={{ ...errorStyle, color: '#4caf50' }}>{success}</p>}
        <div style={fieldStyle}>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Password:</label>
          <input
            type="password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Confirm Password:</label>
          <input
            type="password"
            style={inputStyle}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>Register</button>
        <button
          type="button"
          style={{ ...buttonStyle, backgroundColor: '#2196f3', marginTop: '10px' }}
          onClick={() => navigate('/login')}
        >
          Back to Login
        </button>
      </form>
    </div>
  );
};

export default Register;