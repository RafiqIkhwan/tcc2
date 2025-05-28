import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'; // Import file CSS Modules

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State untuk pesan error
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate('/userlist');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset pesan error saat submit
    const staticEmail = 'nurul@gmail.com';
    const staticPassword = 'cantik';

    if (email === staticEmail && password === staticPassword) {
      localStorage.setItem("isLoggedIn", "true"); // simpan status login
      navigate('/userlist');
    } else {
      setErrorMessage('Invalid credentials. Please try again.'); // Set pesan error
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h2>Login Page</h2>
        {errorMessage && <div className={styles.alert}>{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              autoComplete="username"
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className={styles.loginButton}>Login</button>
          <button
            type="button"
            className={styles.loginButton}
            style={{ marginLeft: "10px", background: "#2196f3" }}
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;