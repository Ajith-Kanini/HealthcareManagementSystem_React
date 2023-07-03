import React, { useState } from 'react';
import './PatientNavBar.css';
import { NavLink } from 'react-router-dom';

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
    setSearchActive(false); 
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
              <li className="nav-item"><NavLink to={'/PatientHomePage'}>Home</NavLink></li>
              <li className="nav-item dropdown" onClick={handleDropdownClick}>
                <NavLink to={'/PatientAppoinmentBooking'} className="dropbtn">Book an Appoinment</NavLink>
              </li>
              <li className="nav-item"><NavLink to={'/PatientMyAppoinments'}>My Appointments</NavLink></li>
              <li className="nav-item"><NavLink to={'/PatientDoctors'}>Doctors</NavLink></li>
              <li className="nav-item">
                <NavLink to={'/LandingHome'} className="signtn" onClick={() => localStorage.clear('Role')}>
                  Logout
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/PatientProfile'}><i className="fas fa-user-circle" style={{ cursor: 'pointer', height: '2rem', color: '#23A6D5' }}></i></NavLink>
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
