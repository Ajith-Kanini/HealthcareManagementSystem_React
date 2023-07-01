import React, { useState } from 'react';
import './Register.css';
const Register = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

 
 


  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };



  return (
    <div className='container-fluid'>
      <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="E-mail"
                  name="adminMailId"
                  
                  
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type= 'password'
                  placeholder="Password"
                  name="password"
                 
                  required
                />
              </div>
              <div className="input-field">
                <i className="far fa-id-card"></i>
                <select>
                  <option disabled value="">
                    Select your Role here
                  </option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>
              <button
                type="button"
                className="btn solid"
              >
                Sign in
              </button>
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="j" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="u" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="u" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="j" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            <form className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  name="userName"
                 
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  name="mailId"
                 
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type='password'
                  placeholder="Password"
                  name="password"
                 
                  required
                />

              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type='password'
                  placeholder="Confirm Password"
                  name="cpassword"
                  required
                />

              </div>
              <button type="button" className="btn">
                Sign up
              </button>
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media" id="contact">
                <a href="link" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="link" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="link" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="link" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here?</h3>
              <p>
                You may say I'm a dreamer, but you're not the only one. I hope
                someday you'll join us, and the world will live as one.
              </p>
              <button
                className="btn transparent"
                onClick={handleSignUpClick}
              >
                Sign up
              </button>
            </div>
            <img src="" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us?</h3>
              <p>
                “A dream you dream alone is only a dream. A dream you dream
                together is reality.”
              </p>
              <button
                className="btn transparent"
                onClick={handleSignInClick}
              >
                Sign in
              </button>
            </div>
            <img src="" className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
