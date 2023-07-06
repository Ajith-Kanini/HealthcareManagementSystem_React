import React, { useEffect, useState } from 'react';
import DOCHEART from '../Assets/Image/Doctorheart.svg'
import DTR from '../Assets/Image/undraw_doctors_p6aq.svg'
import './Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Variable } from '../Assets/Variable';
import { toast } from 'react-toastify';
const Register = () => {
  const navigate = useNavigate();
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [role, setRole] = useState('');
  const [loginError, setLoginError] = useState('');
  const [emailchechError, setemailchechError] = useState('');
  const [emailCheck, setEmailcheck] = useState([])
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    doctoName: '',
    email: '',
    doctorPassword: '',
    cpassword: ''
  });

  const reset = {
    doctoName: '',
    email: '',
    doctorPassword: ''
  }
  const validateForm = () => {
    let errors = {};
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.doctorPassword) {
      errors.doctorPassword = 'Password is required';
    }

    if (isSignUpMode && !formData.doctoName) {
      errors.doctoName = 'Username is required';
    }
    if (isSignUpMode && formData.doctorPassword !== formData.cpassword) {
      errors.cpassword = 'Passwords do not match';
    }
    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };



  const handleRegister = async () => {
    try {
      // Validate the form data
      const isValid = validateForm();

      if (isValid) {
        if (role === 'Doctor') {
         
          handleEmailcheckDoctor();
          if (emailCheck.find(dt => dt.email === formData.email)) {
            setemailchechError('Email already exist! Try with another Email ')
            console.log(emailchechError);
          }
          else {
            setemailchechError('')
            const response = await axios.post(Variable.DOCTORAPI_URL, {
              doctoName: formData.doctoName,
              email: formData.email,
              doctorPassword: formData.doctorPassword
            });
            setIsSignUpMode(!isSignUpMode);
            console.log(response.data);
            setFormData(reset);
            toast.success('Registered successfully');

          }

        } else {
          handleEmailcheckPatient()
          if (emailCheck.find(dt => dt.email === formData.email)) {
            setemailchechError('Email already exist! Try with another Email ')
          }
          else {
            console.log("else");
            const response = await axios.post(Variable.USER_URL, {
              firstName: formData.doctoName,
              email: formData.email,
              patientPassword: formData.doctorPassword
            });
            toast.success('Registered successfully');
            setIsSignUpMode(!isSignUpMode);
            setFormData(reset);
            console.log(response.data);
          }
        }
      }
    } catch (error) {
      toast.error('Registration failed');
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try { 
      const isValid = validateForm();

      if (isValid) {
        if (role === 'Doctor') {

          const response = await axios.post(Variable.DOCTOR_LOGIN, {
            email: formData.email,
            doctorPassword: formData.doctorPassword
          });
          console.log(response.data);
          localStorage.setItem('Role', role);
          localStorage.setItem('Doctor_Token', response.data);
          localStorage.setItem('email',formData.email)
          localStorage.getItem('Role') === 'User' ?
            navigate('/PatientHomePage') : navigate('/PatientHomePage')
            window.location.reload()
        } else {

          const response = await axios.post(Variable.PATIENT_LOGIN, {
            email: formData.email,
            patientPassword: formData.doctorPassword
          });
          localStorage.setItem('Role', role);
          localStorage.setItem('email', formData.email);
          localStorage.setItem('Patient_Token', response.data);
          console.log(response.data);

          localStorage.getItem('Role') === 'User' ?
            navigate('/PatientHomePage') : navigate('/PatientHomePage')
            window.location.reload()
        }
      }
    } catch (error) {
      setLoginError('Invalid credentials');
    }

  };
  const handleEmailcheckPatient = async () => {
    try {

      await axios.get(Variable.PATIENT_EMAIL)
        .then(res => setEmailcheck(res.data))
    } catch (error) {
      console.error(error);
    }
  }
  const handleEmailcheckDoctor = async () => {
    try {

      await axios.get(Variable.DOCTORAPI_URL)
        .then(res => setEmailcheck(res.data))
    } catch (error) {
      console.error(error);
    }
  }
  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Perform validation checks for the specific input
    let error = '';
    if (name === 'email') {
      if (!value) {
        error = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = 'Invalid email address';
      }
    } else if (name === 'doctorPassword') {
      if (!value) {
        error = 'Password is required';
      } else if (
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}/.test(value)
      ) {
        error =
          'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character';
      }
    } else if (name === 'doctoName') {
      if (isSignUpMode && !value) {
        error = 'Username is required';
      } else if (isSignUpMode && value.length < 5) {
        error = 'Username must be at least 5 characters long';
      } else if (isSignUpMode && !/^[a-zA-Z]+$/.test(value)) {
        error = 'Username can only contain alphabetic characters';
      }
    } else if (name === 'cpassword') {
      if (isSignUpMode && value !== formData.doctorPassword) {
        error = 'Passwords do not match';
      }
    }

    // Set the formErrors state with the error for the specific input
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    setLoginError('')
    setemailchechError('')
  }, [])


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
              {formErrors.email && <div className="error">{formErrors.email}</div>}
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
              {formErrors.doctorPassword && <div className="error">{formErrors.doctorPassword}</div>}
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
              <div className="error">{loginError}</div>
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
              {isSignUpMode && formErrors.doctoName && <div className="error">{formErrors.doctoName}</div>}
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
              {formErrors.email && <div className="error">{formErrors.email}</div>}
              <div className="error">{emailchechError}</div>
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
              {formErrors.doctorPassword && <div className="error">{formErrors.doctorPassword}</div>}
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type='password'
                  placeholder="Confirm Password"
                  name="cpassword"
                  onChange={handleInputChange}
                  required
                />

              </div>
              {isSignUpMode && formErrors.cpassword && <div className="error">{formErrors.cpassword}</div>}
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
    </div>
  );
};

export default Register;
