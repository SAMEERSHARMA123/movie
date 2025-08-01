import React, { useRef, useState } from 'react';
import './Login/Login.css';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const bg = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bg.left) / bg.width) * 100;
    const y = ((e.clientY - bg.top) / bg.height) * 100;
    setSpotlight({ x, y });
  };

  const handleChange = (e, idx) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    if (!val) return;
    const newOtp = [...otp];
    newOtp[idx] = val[val.length - 1];
    setOtp(newOtp);
    if (idx < 5 && val) {
      inputs.current[idx + 1].focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace') {
      if (otp[idx]) {
        const newOtp = [...otp];
        newOtp[idx] = '';
        setOtp(newOtp);
      } else if (idx > 0) {
        inputs.current[idx - 1].focus();
      }
    } else if (e.key === 'ArrowLeft' && idx > 0) {
      inputs.current[idx - 1].focus();
    } else if (e.key === 'ArrowRight' && idx < 5) {
      inputs.current[idx + 1].focus();
    }
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  // SessionStorage se saved OTP wala data (maan ke chalo sessionStorage mein pura user object hai jisme OTP bhi hai)
  const registerData = JSON.parse(sessionStorage.getItem("register"));
  if (!registerData) {
    alert("No registration data found!");
    return;
  }

  const savedOtp = registerData?.otp.toString(); 

  const enteredOtp = otp.join('');  

  if (enteredOtp === savedOtp) {
    alert("OTP verified successfully!");
    navigate('/');
  } else {
    alert("Invalid OTP, please try again.");
  }
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
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Enter OTP</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2rem 0' }}>
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={el => inputs.current[idx] = el}
                type="text"
                inputMode="numeric"
                maxLength={1}
                className="login-input otp-input"
                value={digit}
                onChange={e => handleChange(e, idx)}
                onKeyDown={e => handleKeyDown(e, idx)}
                style={{ textAlign: 'center', fontSize: '2rem', width: '3rem', padding: '0.5rem' }}
                autoFocus={idx === 0}
              />
            ))}
          </div>
          <button type="submit" className="login-btn gradient-glow">Verify OTP</button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
