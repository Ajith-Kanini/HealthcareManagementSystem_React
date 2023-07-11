import React, { useEffect, useState } from 'react';
import './PatientNavBar.css';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Variable } from '../../Assets/Variable';

const PatientNavBar = () => {
  const [isSearchActive, setSearchActive] = useState(false);
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);
  const [patient, setPatient] = useState({})

  const fetchpatient = async () => {
    try {
        await axios.get(Variable.PATIENT_URL)
            .then(res => {
                setPatient(res.data.find(dt => dt.email === localStorage.getItem('email')))

            })

    } catch (error) {
        console.error(error);
    }
};

  const handleSearchIconClick = () => {
    setSearchActive(!isSearchActive);
  };
  const navigate=useNavigate()
  const handleMenuToggleClick = () => {
    setMobileMenuActive(!isMobileMenuActive);
  };

  const handleDropdownClick = () => {
    setSearchActive(false); 
  };
  const handlelogout=()=>{
    localStorage.clear('Role')
    navigate('/LandingHome')
    window.location.reload()
  }
  localStorage.setItem('Id',patient.patientId)
  useEffect(()=>{
    if(localStorage.getItem('Role')==='User')
    {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('Patient_Token')}`;
    fetchpatient();
    }
    else{
      navigate('/LandingHome')
    }
    
  },[navigate])

  return (
    <div>
      <div className="page-wrapper">
        <div className="nav-wrapper">
          <div className="grad-bar"></div>
          <nav className="navbar">
          <img src='https://banner2.cleanpng.com/20180728/xcp/kisspng-health-care-public-health-medicine-hospital-cupped-hands-5b5bed5c4cf652.0198420915327511963153.jpg' alt="CompanyLogo" style={{height:'4rem'}}/>
            <div className={`menu-toggle ${isMobileMenuActive ? 'is-active' : ''}`} onClick={handleMenuToggleClick}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className={`nav ${isSearchActive ? 'search' : 'no-search'}`}>
              <li className="nav-item"><NavLink to={'/PatientHomePage'}>Home</NavLink></li>
              <li className="nav-item dropdown" onClick={handleDropdownClick}>
                <NavLink to={'/PatientAppoinmentBooking'} className="dropbtn">Book an Appoinment</NavLink>
              </li>
              <li className="nav-item"><NavLink to={'/PatientMyAppoinments' } href='#Services'>My Appointments</NavLink></li>
              <li className="nav-item"><NavLink to={'/PatientDoctors'}>Doctors</NavLink></li>
              <li className="nav-item">
                <NavLink to={'/LandingHome'} className="signtn" onClick={ handlelogout}>
                  Logout
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/PatientProfile'} className="usrName"><i className="fas fa-user-circle" ></i><h6>{patient.firstName}</h6></NavLink>
              </li>
              <i className="fas fa-search" id="search-icon"  onClick={handleSearchIconClick}></i>
              <input className={`search-input ${isSearchActive ? 'search-active' : ''}`} type="text" placeholder="Search.." />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PatientNavBar;
