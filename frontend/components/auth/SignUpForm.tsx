'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import styles from './AuthForm.module.css';

interface SignUpFormProps {
  onSwitchToLogin: () => void;
  onSignUp: () => void;
}

export default function SignUpForm({ onSwitchToLogin, onSignUp }: SignUpFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    dob: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    onSignUp();
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Sign Up</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            placeholder="Choose a username"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="dob">Date of Birth</label>
          <input 
            type="date" 
            id="dob"
            className={styles.datePicker}
            value={formData.dob}
            onChange={(e) => setFormData({...formData, dob: e.target.value})}
            required
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <div className={styles.passwordWrapper}>
            <input 
              type={showPassword ? "text" : "password"} 
              id="password" 
              placeholder="Create password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
            <button 
              type="button" 
              className={styles.eyeToggle}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className={styles.passwordWrapper}>
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              id="confirmPassword" 
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
            />
            <button 
              type="button" 
              className={styles.eyeToggle}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Create Account
        </button>

        <p className={styles.footerText}>
          Already have an account? <button type="button" onClick={onSwitchToLogin}>Login</button>
        </p>
      </form>
    </div>
  );
}
