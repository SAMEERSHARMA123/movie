import React, { useState } from 'react';
import './Login/Login.css';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const bg = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bg.left) / bg.width) * 100;
    const y = ((e.clientY - bg.top) / bg.height) * 100;
    setSpotlight({ x, y });
  };

 const handleRegister = async (e) => {
  e.preventDefault();
  try {
    const register = await axios.post("http://localhost:5000/api/users/register", {
      username,
      email,
      password,
    });

    if(register.status === 400){
      alert("Email already exists")
    }

    sessionStorage.setItem("register", JSON.stringify(register.data));


    navigate('/otp'); 
  } catch(error) {
    if (error.response && error.response.status === 400) {
      alert('Email already exists');
    } else {
      // Handle other errors
      console.error('Registration error:', error);
      alert('Something went wrong. Please try again.');
    }
  };
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
        <form className="login-form" onSubmit={handleRegister}>
          <h2 className="login-title">Register</h2>
          <div className="input-group floating-label-group">
            <input
              type="text"
              className="login-input"
              value={username}
              onChange={e => setUsername(e.target.value)}
              onFocus={() => setUsernameFocused(true)}
              onBlur={() => setUsernameFocused(false)}
              required
            />
            <label
              className={usernameFocused || username ? 'floating active' : 'floating'}
            >
              Username
            </label>
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
          <button type="submit" className="login-btn gradient-glow">Register</button>
          <div className="signup-link-row">
            Already have an account?{' '}
            <button type="button" onClick={() => navigate('/')} className="signup-link">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
