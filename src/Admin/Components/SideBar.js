import React from 'react';
import './SideBar.css';
import { NavLink } from 'react-router-dom';


const SideBar = () => {
  return (
    <section className="section">
      <div className='SideBar'>
        <h3 className='text-white'>Admin Dashboard</h3>
        <hr />
        <ul>
          <li className='dash'>
            <NavLink activeClassName='active' className='navlink' to='/Dashboard'>
              <i className="fas fa-th"></i>Dashboard
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
          {/* Other menu items */}
        </ul>
        <h4 className='upgrade'>Upgrade Pro</h4>
      </div>
    </section>
  );
}

export default SideBar;
