import React from 'react'
import './Home.css'
import MainImg from '../../Assets/Image/expressive-young-woman-posing-studio.jpg'
const Home = () => {
  return (
    <section className="section">
        <nav className="navbar">

        </nav>
        <main className="main">
            <h1>Your Health Is Our Top Priority</h1>
            <div className="card">
                <img src={MainImg} alt="" className='innerImage'/>
            </div>
        </main>
    </section>
  )
}

export default Home
