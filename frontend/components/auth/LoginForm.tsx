'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import styles from './AuthForm.module.css';

interface LoginFormProps {
  onSwitchToSignUp: () => void;
  onLogin: () => void;
}

export default function LoginForm({ onSwitchToSignUp, onLogin }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <div className={styles.passwordWrapper}>
            <input 
              type={showPassword ? "text" : "password"} 
              id="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        <button type="submit" className={styles.submitBtn}>
          Login
        </button>

        <div className={styles.divider}>
          <span>or</span>
        </div>

        <button type="button" className={styles.googleBtn}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/layout/google.svg" alt="Google" width="20" height="20" />
          Login with Google
        </button>

        <p className={styles.footerText}>
          New to Her Life? <button type="button" onClick={onSwitchToSignUp}>Sign Up</button>
        </p>
      </form>
    </div>
  );
}
