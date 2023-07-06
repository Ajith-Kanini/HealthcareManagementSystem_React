import React, { useEffect, useState } from 'react';
import { NavLink,useNavigate} from 'react-router-dom';
import './DoctorNavBar.css'
import axios from 'axios';
import { Variable } from '../../Assets/Variable';


const DoctorNavBar = () => {
        const [isSearchActive, setSearchActive] = useState(false);
        const [isMobileMenuActive, setMobileMenuActive] = useState(false);
        const [patient, setPatient] = useState({})

        const fetchpatient = async () => {
          try {
              await axios.get(Variable.DOCTORAPI_URL)
                  .then(res => {
                      setPatient(res.data.find(dt => dt.email === localStorage.getItem('email')))
      
                  })
      
          } catch (error) {
              console.error(error);
          }
      };
        const navigate=useNavigate()
        const handleSearchIconClick = () => {
            setSearchActive(!isSearchActive);
        };
    
        const handleMenuToggleClick = () => {
            setMobileMenuActive(!isMobileMenuActive);
        };
        const handlelogout=()=>{
            localStorage.clear('Role')
            navigate('/LandingHome')
            window.location.reload()
          }
          useEffect(()=>{
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('Doctor_Token')}`;
            fetchpatient();
          },[])
  return (
    <div >
            <div className="page-wrapper ">
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
                            <li className="nav-item"><NavLink >Services</NavLink></li>
                            <li className="nav-item"><NavLink to={'/DoctorAppoinment'}>My Appointments</NavLink></li>
                            <li className="nav-item"><NavLink >Contact Us</NavLink></li>
                            <li className="nav-item"><NavLink to={'/LandingHome'} onClick={ handlelogout} style={{ backgroundColor: '#23A6D5', padding: '.7rem 1.4rem', borderRadius: '2rem' }}  >Logout</NavLink></li>
                            <li className="nav-item"><NavLink  to={'/DoctorProfile'}><i class="fas fa-user-circle" style={{cursor:'pointer',height:'2rem',color:'#23A6D5'}}></i></NavLink></li>
                            <li><h4>{patient.doctoName}</h4></li>
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
