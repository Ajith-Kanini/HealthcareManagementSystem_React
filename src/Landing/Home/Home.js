import React from 'react'
import './Home.css'
import MainImg from '../../Assets/Image/chineese.png'
const Home = () => {
  return (
    <section className="section">
      <nav className="navbar">
        {/* Navigation bar content */}
      </nav>
      <main className="main">
        <div className="content">
          <h1>Protect Your Health and Take Care Of Your Health</h1>
          <ul>
            <li><i className="fas fa-calendar-alt" ></i> Make An Appoinment</li>
            <li><i className="fas fa-shield-alt" ></i>Health Guarentee Forever</li>
            <li><i className="fas fa-user-md" ></i>Find Your Best Doctor</li>
            <li><i className="fas fa-map-marker-alt"></i>Spread In Various Places</li>
          </ul>
        </div>

        <div className="image-container">
          <img src={MainImg} alt="" className='innerImage' />
        </div>
      </main>
    </section>

  )
}

export default Home
