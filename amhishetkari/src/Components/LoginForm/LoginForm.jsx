import React from 'react';
import './LoginForm.css';
import { FaHouseUser,FaLock } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action=''>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaHouseUser className='icon'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder='password' required />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type="Checkbox"/>remember me </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
              <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
    </div>
  );
};
export default LoginForm;
