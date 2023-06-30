import React from 'react'
import './SideBar.css'
const SideBar = () => {
    return (
        <section className="section">
            <div className='SideBar'>
                <h3>Admin Dashboard</h3>
                <hr />
                <ul>
                    <li><i class="fas fa-th"></i>Dasbboard</li>
                    <li> <i className="fas fa-user-md"></i>Doctors</li>
                    <li><i className="fas fa-user-injured"></i>Patients</li>
                    <li><i className="fas fa-cogs"></i>Actions</li>
                </ul>
                <h4 className='upgrade'>Upgrade Pro</h4>
            </div>
        </section>
    )
}

export default SideBar
