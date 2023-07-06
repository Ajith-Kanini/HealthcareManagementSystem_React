import React, { useState } from 'react';
import './LandingNavbar.css';
import { NavLink } from 'react-router-dom';
// import Menu from '../../Assets/Image/wecare.svg'
const LandingNavbar = () => {
    const [isSearchActive, setSearchActive] = useState(false);
    const [isMobileMenuActive, setMobileMenuActive] = useState(false);


 
    const handleSearchIconClick = () => {
        setSearchActive(!isSearchActive);
    };

    const handleMenuToggleClick = () => {
        setMobileMenuActive(!isMobileMenuActive);
    };

    return (
        <div className={`page-wrapper`}>
           
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
                        <li className="nav-item"><NavLink to={'/LandingHome'}>Home</NavLink></li>
                        <li className="nav-item"><NavLink href='#Services'>Services</NavLink></li>
                        <li className="nav-item"><NavLink>Coverages</NavLink></li>
                        <li className="nav-item"><NavLink>Contact Us</NavLink></li>
                        <li className="nav-item">
                            <NavLink className="signtn" to={'/Register'}>
                                Signin
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/AdminLogin'} className="signtn">
                                Admin Login
                            </NavLink>
                        </li>
                        <i className="fas fa-search" id="search-icon" onClick={handleSearchIconClick}></i>
                        <input className={`search-input ${isSearchActive ? 'search-active' : ''}`} type="text" placeholder="Search.." />
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default LandingNavbar;
