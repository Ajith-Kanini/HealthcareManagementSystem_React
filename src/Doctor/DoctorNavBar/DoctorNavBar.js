import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../../Landing/Home/Home';
import './DoctorNavBar.css'
import DProfile from '../DocrorProfile/DocrorProfile'
import DoctorAppoinment from '../DoctorAppoinment/DoctorAppoinment';

const DoctorNavBar = () => {
        const [isSearchActive, setSearchActive] = useState(false);
        const [isMobileMenuActive, setMobileMenuActive] = useState(false);
    
        const handleSearchIconClick = () => {
            setSearchActive(!isSearchActive);
        };
    
        const handleMenuToggleClick = () => {
            setMobileMenuActive(!isMobileMenuActive);
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
                            <li className="nav-item"><NavLink to={'/Appoinment'}>Services</NavLink></li>
                            <li className="nav-item"><NavLink to={'/myAppoinments'}>My Appointments</NavLink></li>
                            <li className="nav-item"><NavLink to={'/patientprofile'}>Contact Us</NavLink></li>
                            <li className="nav-item"><NavLink to={'/Home'} onClick={localStorage.clear('Role')} style={{ backgroundColor: '#23A6D5', padding: '.7rem 1.4rem', borderRadius: '2rem' }}  >Logout</NavLink></li>
                            <li className="nav-item"><NavLink to={'/doctorProfile'}><i class="fas fa-user-circle" style={{cursor:'pointer',height:'2rem',color:'#23A6D5'}}></i></NavLink></li>
                            <i className="fas fa-search" id="search-icon" onClick={handleSearchIconClick}></i>
                            <input className={`search-input ${isSearchActive ? 'search-active' : ''}`} type="text" placeholder="Search.." />
                        </ul>
                    </nav>
                </div>

            </div>
            <Routes>
                {/* <Route path='/signin' Component={RegisterPage} /> */}
                <Route path='/Patienthome' Component={Home} />
                <Route path='/Home' Component={Home} />
                <Route path='/doctorProfile' Component={DProfile} />
                <Route path='/myAppoinments' Component={DoctorAppoinment} />
            </Routes>
        </div>
  )
}

export default DoctorNavBar
