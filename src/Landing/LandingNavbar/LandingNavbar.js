import React, { useState } from 'react';
import './LandingNavbar.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import RegisterPage from '../Register';
import Home from '../Home/Home';
import Modal from 'react-modal';
import AdminLogin from '../../Admin/AdminLogin/AdminLogin';

const LandingNavbar = () => {
    const [isSearchActive, setSearchActive] = useState(false);
    const [isMobileMenuActive, setMobileMenuActive] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

 
    const closeModal = () => {
        setModalOpen(false);
    };

    const handleSearchIconClick = () => {
        setSearchActive(!isSearchActive);
    };

    const handleMenuToggleClick = () => {
        setMobileMenuActive(!isMobileMenuActive);
    };

    return (
        <div className={`page-wrapper ${isModalOpen ? 'blur' : ''}`}>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                <RegisterPage />
            </Modal>
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
                        <li className="nav-item"><NavLink>Services</NavLink></li>
                        <li className="nav-item"><NavLink>Coverages</NavLink></li>
                        <li className="nav-item"><NavLink>Contact Us</NavLink></li>
                        <li className="nav-item">
                            <NavLink style={{ backgroundColor: '#23A6D5', padding: '.7rem 1.4rem', borderRadius: '2rem' }} to={'/signin'}>
                                Signin
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={{ backgroundColor: '#23A6D5', padding: '.7rem 1.4rem', borderRadius: '2rem' }} to={'/adminSignin'}>
                                Admin Login
                            </NavLink>
                        </li>
                        <i className="fas fa-search" id="search-icon" onClick={handleSearchIconClick}></i>
                        <input className={`search-input ${isSearchActive ? 'search-active' : ''}`} type="text" placeholder="Search.." />
                    </ul>
                </nav>
            </div>

            <Routes>
                <Route path='/signin' element={<RegisterPage />} />
                <Route path='/adminSignin' element={<AdminLogin/>} />
                <Route path='/Home' element={<Home />} />

                <Route path='/' element={<Home />} />            </Routes>
        </div>
    );
}

export default LandingNavbar;
