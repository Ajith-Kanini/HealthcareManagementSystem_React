import React, { useState } from 'react';
import './LandingNavbar.css';
import {  NavLink, Route, Routes } from 'react-router-dom';
import RegisterPage from '../Register';
import Home from '../Home/Home';
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
                            <li className="nav-item"><NavLink href="link">Services</NavLink></li>
                            <li className="nav-item"><NavLink href="link">Coverages</NavLink></li>
                            <li className="nav-item"><NavLink href="link">Contact Us</NavLink></li>
                            <li className="nav-item"><NavLink to={'/signin'} style={{backgroundColor:'#23A6D5',padding:'.7rem 1.4rem',borderRadius:'2rem'}} >Signin</NavLink></li>
                            <i className="fas fa-search" id="search-icon" onClick={handleSearchIconClick}></i>
                            <input className={`search-input ${isSearchActive ? 'search-active' : ''}`} type="text" placeholder="Search.." />
                        </ul>
                    </nav>
                </div>
            
            </div>
            <Routes>
                <Route path='/signin' Component={RegisterPage}/>
                <Route path='/Home' Component={Home}/>
            </Routes>
        </div>
    );
}

export default LandingNavbar;
