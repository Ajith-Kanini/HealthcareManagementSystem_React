import React from 'react'
import './Home.css'
import Individulal from '../../Assets/Image/MedicalFor.jpg'
import AdultVision from '../../Assets/Image/adult-vision.jpg'
import Child from '../../Assets/Image/child-dental.jpg'
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
                        <img src={Individulal} alt="FlexboxFeature" />
                        <h2>Medi-Cal for Individuals and Families</h2>
                        <p>Depending on your income, you can get free or low-cost health care services.</p>
                    </div>
                    <div className="feature-container">
                        <img src={AdultVision} alt="FlexboxFeature" />
                        <h2>Adult Vision</h2>
                        <p>Adults can enroll directly into a choice of two different providers</p>
                    </div>
                    <div className="feature-container">
                        <img src={Child} alt="FlexboxFeature" />
                        <h2>CHildern's dental</h2>
                        <p>Children can get free dental care with our experienced doctors</p>
                    </div>
                </section>
    </section>
    </div>

  )
}

export default Home
