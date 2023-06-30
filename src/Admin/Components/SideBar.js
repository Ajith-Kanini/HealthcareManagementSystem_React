import React from 'react'
import './SideBar.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AdminDoctor from './Dashboard/Dashboard.css'
const SideBar = () => {
    return (
        <BrowserRouter>
        <section className="section">
            <div className='SideBar'>
                <h3>Admin Dashboard</h3>
                <hr />
                <ul>
                    <li className='dash'><i class="fas fa-th "></i>Dasbboard</li>
                    <li> <i className="fas fa-user-md"></i>Doctors</li>
                    <li><i className="fas fa-user-injured"></i>Patients</li>
                    <li><i className="fas fa-cogs"></i>Actions</li>
                    <li><i className="fas fa-bell"></i>Notification</li>
                    <li><i className="fas fa-sign-out-alt"></i>Logout</li>
                </ul>
                <h4 className='upgrade'>Upgrade Pro</h4>
            </div>
        </section>
        <Routes>
            <Route path='/adminDoctor' Component={AdminDoctor}/>
        </Routes>
        </BrowserRouter>

        
            
    )
}

export default SideBar
