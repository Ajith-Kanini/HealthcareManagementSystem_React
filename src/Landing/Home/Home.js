import React from 'react'
import './Home.css'
// import LandingNavbar from '../LandingNavbar/LandingNavbar'
// import DRImage from '../../Assets/Image/chineese.png'
const Home = () => {
  return (
    <div>
        
        <section className="section">
          <section className="headline">
                    <h1>Unique HealthCare</h1>
                    <p>Protect Your Health and Take Care Of Your Health</p>
                </section>
                <section className="features">
                    <div className="feature-container">
                        <img src="https://cdn-images-1.medium.com/max/2000/1*HFAEJvVOq4AwFuBivNu_OQ.png" alt="FlexboxFeature" />
                        <h2>Flexbox Featured</h2>
                        <p>This pen contains use of flexbox for the headline and feature section! We use it in our mobile navbar and show the power of mixing css grid and flexbox.</p>
                    </div>
                    <div className="feature-container">
                        <img src="https://blog.webix.com/wp-content/uploads/2017/06/20170621-CSS-Grid-Layout-710x355-tiny.png" alt="FlexboxFeature" />
                        <h2>CSS Grid Navigation</h2>
                        <p>While flexbox is used for the the mobile navbar, CSS grid is used for the desktop navbar showing many ways we can use both.</p>
                    </div>
                    <div className="feature-container">
                        <img src="https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg" alt="FlexboxFeature" />
                        <h2>Basic HTML5</h2>
                        <p>This pen contains basic html to setup the page to display the responsive navbar.</p>
                    </div>
                </section>
    </section>
    </div>

  )
}

export default Home
