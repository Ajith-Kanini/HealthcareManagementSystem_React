import React, { useState } from 'react';
import './PatientNavBar.css';
import AppoinmentBook from '../AppoinmentBooking/AppoinmentBooking';
import { NavLink, Route, Routes } from 'react-router-dom';
// import RegisterPage from '../../Landing/Register';
import Home from '../../Landing/Home/Home';
import PatientDoctors from '../PatientDoctors/PatientDoctors';
import MyAppoinments from '../MyAppoinments/MyAppoinments';
// import Register from '../../Landing/Register';

const PatientNavBar = () => {
  const [isSearchActive, setSearchActive] = useState(false);
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);

  const handleSearchIconClick = () => {
    setSearchActive(!isSearchActive);
  };

  const handleMenuToggleClick = () => {
    setMobileMenuActive(!isMobileMenuActive);
  };

  const handleDropdownClick = () => {
    setSearchActive(false); // Close search input if open
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="nav-wrapper">
          <div className="grad-bar"></div>
          <nav className="navbar">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="CompanyLogo" />
            <div className={`menu-toggle ${isMobileMenuActive ? 'is-active' : ''}`} onClick={handleMenuToggleClick}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className={`nav ${isSearchActive ? 'search' : 'no-search'}`}>
              <li className="nav-item"><NavLink to={'/Home'}>Home</NavLink></li>
              <li className="nav-item dropdown" onClick={handleDropdownClick}>
                <NavLink to={'/Appoinment'} className="dropbtn">Book an Appoinment</NavLink>
              </li>
              <li className="nav-item"><NavLink to={'/myAppoinments'}>My Appointments</NavLink></li>
              <li className="nav-item"><NavLink to={'/PDoctors'}>Doctors</NavLink></li>
              <li className="nav-item">
                <NavLink to={'/Home'} style={{ backgroundColor: '#23A6D5', padding: '.7rem 1.4rem', borderRadius: '2rem' }} onClick={() => localStorage.clear('Role')}>
                  Logout
                </NavLink>
              </li>
              <li className="nav-item">
                <i className="fas fa-user-circle" style={{ cursor: 'pointer', height: '2rem', color: '#23A6D5' }}></i>
              </li>
              <i className="fas fa-search" id="search-icon"  onClick={handleSearchIconClick}></i>
              <input className={`search-input ${isSearchActive ? 'search-active' : ''}`} type="text" placeholder="Search.." />
            </ul>
          </nav>
        </div>
      </div>
      <Routes>
        {/* <Route path='/signin' Component={Register} /> */}
        <Route path='/Patienthome' Component={Home} />
        <Route path='/Home' Component={Home} />
        <Route path='/Appoinment' Component={AppoinmentBook} />
        <Route path='/PDoctors' Component={PatientDoctors} />
        <Route path='/myAppoinments' Component={MyAppoinments} />
      </Routes>
    </div>
  );
};

export default PatientNavBar;
