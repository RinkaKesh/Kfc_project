import React, { useState } from 'react';
import style from './Signin.module.css';

const Signin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  
  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/otp/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });
      if (response.ok) {
        setOtpSent(true);
      } else {
        // Handle error
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      // Handle error
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/otp/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, otp }),
      });
      if (response.ok) {
        // OTP verification successful, proceed with sign-in or sign-up
      } else {
        // Handle error
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      // Handle error
    }
  };

  return (
    <div className={style.signinContainer}>
      <div className={style.upper}>
        <div className={style.signin_header}><strong>Sign In / Sign Up</strong></div>
        <div className={style.kfc_logo}><img src="kfcLogo.svg" alt="kfc-Logo" /></div>
        <div className={style.signin_title}><strong>LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</strong></div>
      </div>

      <div className={style.lower}>
        <form onSubmit={otpSent ? handleVerifyOTP : handleSubmit}>
          <input type="tel" value={phoneNumber} onChange={handleChange} className={style.signin_input} placeholder='Phone Number *' required />
          <div className={style.signin_policy}>By “logging in to KFC”, you agree to our <a href="#">Privacy Policy</a> and <a href="#">Terms & Conditions.</a></div>
          {otpSent ? (
            <>
              <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} className={style.signin_input} placeholder='Enter OTP' required />
              <button type="submit" className={style.signin_codeBtn}>Verify OTP</button>
            </>
          ) : (
            <button type="submit" className={style.signin_codeBtn}>Send Me a Code</button>
          )}
          <div className={style.signin_or}>or</div>
          <button className={style.signin_skipBtn}>Skip, Continue As Guest</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
