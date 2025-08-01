import React, { useState } from 'react'
import './Login.css'
import { Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const bg = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bg.left) / bg.width) * 100;
    const y = ((e.clientY - bg.top) / bg.height) * 100;
    setSpotlight({ x, y });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="login-background" onMouseMove={handleMouseMove}>
      <div
        className="spotlight-overlay"
        style={{
          '--x': `${spotlight.x}%`,
          '--y': `${spotlight.y}%`
        }}
      />
      <div className="login-card">
        <form className="login-form" onSubmit={handleLogin}>
          <h2 className="login-title">Sign In</h2>
          <div className="social-login-row">
            <button type="button" className="social-btn google" aria-label="Login with Google">
              <FcGoogle size={24} />
            </button>
            <button type="button" className="social-btn facebook" aria-label="Login with Facebook">
              <FaFacebookF size={22} color="#1877f3" />
            </button>
          </div>
          <div className="input-group floating-label-group">
            <input
              type="email"
              className="login-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              required
            />
            <label
              className={emailFocused || email ? 'floating active' : 'floating'}
            >
              Email
            </label>
          </div>
          <div className="input-group password-group floating-label-group">
            <input
              type={showPassword ? 'text' : 'password'}
              className="login-input"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              required
            />
            <label
              className={passwordFocused || password ? 'floating active' : 'floating'}
            >
              Password
            </label>
            <span
              className="eye-icon"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={0}
              role="button"
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <EyeOff size={20} color="#fff" />
              ) : (
                <Eye size={20} color="#fff" />
              )}
            </span>
          </div>
          <div className="remember-forgot-row">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
          </div>
          <button type="submit" className="login-btn gradient-glow">Login</button>
          <div className="muted-text">Forgot your password?</div>
          <div className="signup-link-row">
            Don't have an account? <button type="button" onClick={() => navigate('/register')} className="signup-link">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;