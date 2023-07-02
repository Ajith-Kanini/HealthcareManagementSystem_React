import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <i className="fab fa-slack"></i>
                            <span className="logo_name">CodingLab</span>
                        </div>
                        <div className="media-icons">
                            <a href="link"><i className="fab fa-facebook-f"></i></a>
                            <a href="link"><i className="fab fa-twitter"></i></a>
                            <a href="link"><i className="fab fa-instagram"></i></a>
                            <a href="link"><i className="fab fa-linkedin-in"></i></a>
                            <a href="link"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Company</li>
                            <li><a href="link">Home</a></li>
                            <li><a href="link">Contact us</a></li>
                            <li><a href="link">About us</a></li>
                            <li><a href="link">Get started</a></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Services</li>
                            <li><a href="link">App design</a></li>
                            <li><a href="link">Web design</a></li>
                            <li><a href="link">Logo design</a></li>
                            <li><a href="link">Banner design</a></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Account</li>
                            <li><a href="link">Profile</a></li>
                            <li><a href="link">My account</a></li>
                            <li><a href="link">Prefrences</a></li>
                            <li><a href="link">Purchase</a></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Courses</li>
                            <li><a href="link">HTML & CSS</a></li>
                            <li><a href="link">JavaScript</a></li>
                            <li><a href="link">Photography</a></li>
                            <li><a href="link">Photoshop</a></li>
                        </ul>
                        <ul className="box input-box">
                            <li className="link_name">Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2021 <a href="link">CodingLab.</a>All rights reserved</span>
                        <span className="policy_terms">
                            <a href="link">Privacy policy</a>
                            <a href="link">Terms & condition</a>
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
