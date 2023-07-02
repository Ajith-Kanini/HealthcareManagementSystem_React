import React, { useState } from 'react';
import DOCHEART from '../Assets/Image/Doctorheart.svg'
import DTR from '../Assets/Image/undraw_doctors_p6aq.svg'
import './Register.css';
import PatientHomePage from '../Patient/PatientHomePage/PatientHomePage'
import { Route, Routes,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Variable } from '../Assets/Variable';
import { toast } from 'react-toastify';
const Register = () => {
  const navigate = useNavigate();
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    doctoName: '',
    email: '',
    doctorPassword: ''
  });

  const reset={doctoName: '',
  email: '',
  doctorPassword: ''}
  const handleRegister = async () => {
    try {  
      if (role === 'Doctor') {
        const response = await axios.post(Variable.DOCTORAPI_URL, formData);
        console.log(response.data);
        setFormData(reset)
        toast.success("Registered successfully");
      } else {
        const response = await axios.post(Variable.USER_URL, {
          firstName: formData.doctoName,
          email: formData.email,
          patientPassword: formData.doctorPassword
        });
        toast.success("Registered successfully");
        setFormData(reset)
        console.log(response.data);
      }
      
    } catch (error) {
      toast.error('Registration failed')
      console.error(error);
    }
  };
  
  const handleLogin= async ()=>{
    try {
      console.log(role);
  console.log(Variable.ADMIN_LOGIN);
      if (role === 'Doctor') {
        const response = await axios.post(Variable.DOCTOR_LOGIN, {
          email:formData.email,
          doctorPassword:formData.doctorPassword
        });
        console.log(response.data);
        localStorage.setItem('Role',role)
        localStorage.setItem('Doctor_Token',response.data)
        setFormData(reset)
        toast.success("welcome");
      } else {
        const response = await axios.post(Variable.PATIENT_LOGIN, {
          email: formData.email,
          patientPassword: formData.doctorPassword
        });
        localStorage.setItem('Role',role)
        localStorage.setItem("email",formData.email)
        localStorage.setItem('Patient_Token',response.data)
        toast.success("Welcome");
        setFormData(reset)
        console.log(response.data);
      }
      
    } catch (error) {
      toast.error("Invalid Credentials")
      console.error(error);
    }
    if(localStorage.getItem('Role')==='User')
      navigate('/PatientHome')
      window.location.reload()
  }
  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
                  name="email"
                  onChange={handleInputChange}
                  
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type='password'
                  placeholder="Password"
                  name="doctorPassword"
                  onChange={handleInputChange}
                 
                  required
                />
              </div>
              <div className="input-field">
                <i className="far fa-id-card"></i>
                <select
                value={role} onChange={(e) => setRole(e.target.value)} >
                  <option disabled value="">
                    Select your Role here
                  </option>
                  <option value="User">User</option>
                  <option value="Doctor">Doctor</option>
                </select>
              </div>
              <button
                type="button"
                className="btn solid btn-primary"
                onClick={handleLogin}
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
                  name="doctoName"
                  // value={formData.doctoName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  // value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type='password'
                  placeholder="Password"
                  name="doctorPassword"
                  // value={formData.doctorPassword}
                  onChange={handleInputChange}
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
              <div className="input-field">
                <i className="far fa-id-card"></i>
                <select 
                value={role} onChange={(e) => setRole(e.target.value)}
                >
                  <option disabled value="">
                    Select your Role here
                  </option>
                  <option value="User">User</option>
                  <option value="Doctor">Doctor</option>
                </select>
              </div>
              <button type="button" className="btn btn-primary" onClick={handleRegister}>
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
                className="btn btn-primary transparent"
                onClick={handleSignUpClick}
              >
                Sign up
              </button>
            </div>
            <img src={DTR} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us?</h3>
              <p>
                “A dream you dream alone is only a dream. A dream you dream
                together is reality.”
              </p>
              <button
                className="btn transparent "
                onClick={handleSignInClick}
              >
                Sign in
              </button>
            </div>
            <img src={DOCHEART} className="image" alt="" />
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/PatientHome' Component={PatientHomePage}/>
      </Routes>
    </div>
  );
};

export default Register;
