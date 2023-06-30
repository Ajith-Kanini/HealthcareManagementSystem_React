import React from 'react'
import Sidebar from '../SideBar'
import Navbar from '../Navbar'
import NavCards from '../NavCards'
import '../Dashboard/Dashboard.css'
const AdminDoctor = () => {
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

export default AdminDoctor
