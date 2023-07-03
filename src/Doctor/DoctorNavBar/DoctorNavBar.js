import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import './DoctorNavBar.css'


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
                            <li className="nav-item"><NavLink to={'/LandingHome'}>Home</NavLink></li>
                            <li className="nav-item"><NavLink >Services</NavLink></li>
                            <li className="nav-item"><NavLink to={'/DoctorAppoinment'}>My Appointments</NavLink></li>
                            <li className="nav-item"><NavLink >Contact Us</NavLink></li>
                            <li className="nav-item"><NavLink to={'/LandingHome'} onClick={localStorage.clear('Role')} style={{ backgroundColor: '#23A6D5', padding: '.7rem 1.4rem', borderRadius: '2rem' }}  >Logout</NavLink></li>
                            <li className="nav-item"><NavLink to={'/DoctorProfile'}><i class="fas fa-user-circle" style={{cursor:'pointer',height:'2rem',color:'#23A6D5'}}></i></NavLink></li>
                            <i className="fas fa-search" id="search-icon" onClick={handleSearchIconClick}></i>
                            <input className={`search-input ${isSearchActive ? 'search-active' : ''}`} type="text" placeholder="Search.." />
                        </ul>
                    </nav>
                </div>

            </div>
           
        </div>
  )
}

export default DoctorNavBar
