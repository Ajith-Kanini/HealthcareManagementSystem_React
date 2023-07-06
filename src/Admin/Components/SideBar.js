import React, { useEffect } from 'react';
import './SideBar.css';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';


const SideBar = () => {
  const navigate=useNavigate()
  const handlelogout=()=>{
    localStorage.clear('Role')
    navigate('/LandingHome')
    window.location.reload()
    
  }
  useEffect(()=>{
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('Admin_Token')}`;

  },[])
  return (
    <section className="section123">
      <div className='SideBar123'>
        <h3 className='text-white'>Admin Dashboard</h3>
        <hr />
        <ul>
          <li className='dash'>
            <NavLink activeClassName='active' className='navlink' to='/Dashboard'>
              <i className="fas fa-th" style={{color:'white'}}></i>Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' className='navlink' to='/AdminDoctor'>
              <i className="fas fa-user-md"></i>Doctors
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' className='navlink' to='/AdminPatient'>
              <i className="fas fa-user-injured"></i>Patients
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' className='navlink' to='/AdminAction'>
              <i className="fas fa-cogs"></i>Actions
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' className='navlink' to='/LandingHome' onClick={ handlelogout}>
            <i class="fas fa-sign-out-alt"></i>Logout
            </NavLink>
          </li>
          {/* Other menu items */}
        </ul>
        <h4 className='upgrade'>Upgrade Pro</h4>
      </div>
    </section>
  );
}

export default SideBar;
