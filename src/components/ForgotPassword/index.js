import React, { useState } from 'react';
import { Navigate,  } from 'react-router-dom';
import './index.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform the request to reset password here
    // For example, sending a request to your API

    try {
      // Replace with your API request logic
      await fakeApiRequest(email);
      setMessage('Password reset link has been sent to your email');
      setTimeout(() => {
        Navigate('/login');
      }, 3000);
    } catch (error) {
      setMessage('Error sending password reset link. Please try again.');
    }
  };

  const fakeApiRequest = (email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'user@example.com') {
          resolve('Success');
        } else {
          reject('Error');
        }
      }, 1000);
    });
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default ForgotPassword;
