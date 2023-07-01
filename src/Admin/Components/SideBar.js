import React from 'react';
import './SideBar.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import AdminDashboard from './Dashboard/Dashboard'
import DoctorsPage from './Doctors/AdminDoctor';
import PatientsPage from './Patient/Patient';
import ActionsPage from './Action/DoctorAction';

const SideBar = () => {
  return (
    <section className="section">
      <div className='SideBar'>
        <h3>Admin Dashboard</h3>
        <hr />
        <ul>
          <li className='dash'>
            <NavLink activeClassName='active' className='navlink' to='/dashboard'>
              <i className="fas fa-th"></i>Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' className='navlink' to='/DoctorsPage'>
              <i className="fas fa-user-md"></i>Doctors
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' className='navlink' to='/PatientsPage'>
              <i className="fas fa-user-injured"></i>Patients
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' className='navlink' to='/ActionsPage'>
              <i className="fas fa-cogs"></i>Actions
            </NavLink>
          </li>
          {/* Other menu items */}
        </ul>
        <h4 className='upgrade'>Upgrade Pro</h4>
      </div>
      <Routes>
        <Route path='/dashboard' element={<AdminDashboard />} />
        <Route path='/DoctorsPage' element={<DoctorsPage />} />
        <Route path='/PatientsPage' element={<PatientsPage />} />
        <Route path='/ActionsPage' element={<ActionsPage />} />
        {/* Other routes */}
      </Routes>
    </section>
  );
}

export default SideBar;
