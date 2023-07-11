import React, { useEffect } from 'react'
import Sidebar from '../SideBar'
import Navbar from '../Navbar'
import NavCards from '../NavCards'
import './Dashboard.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate=useNavigate()
    useEffect(() => {
        if(localStorage.getItem('Role')==='Admin')
    {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('Admin_Token')}`;
    
    }
    else{
      navigate('/LandingHome')
    }
    });
    return (
        <section className='Dashboard'>
            <div>
                <Sidebar />
            </div>
            <main className='Dashboardmain'>
                <Navbar />
                <NavCards />
            </main>
        </section>
    )
}

export default Dashboard
