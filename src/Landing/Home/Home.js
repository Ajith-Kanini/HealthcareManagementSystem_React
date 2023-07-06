import React from 'react'
import './Home.css'

const Home = () => {

  return (
    <div>
        
        <section className="section">
                <section className="headline">
                    <h1 className='heading'>Unique HealthCare</h1>
                    <p className='slogan'>Protect Your Health and Take Care Of Your Health</p>
                </section>
                <section className="features" id='services'>
                    <div className="feature-container">
                        <img src="https://img.freepik.com/free-photo/happy-female-doctor-giving-high-fie-little-boy-who-came-with-father-hospital_637285-492.jpg?w=1060&t=st=1688502515~exp=1688503115~hmac=554f3a24cc03d1cdaa191def5c927b6e7d650b4eb0e5202432b604364a89d3a9" alt="FlexboxFeature" />
                        <h2 className='fhead'>Medi-Care for Individuals and Families</h2>
                        <p className='fpara'>Depending on your income, you can get free or low-cost services.</p>
                    </div>
                    <div className="feature-container">
                        <img src="https://img.freepik.com/free-photo/successful-medical-team_329181-9252.jpg?w=1060&t=st=1688502587~exp=1688503187~hmac=eaedbbdb1694b4c0a8e5b8fca220cc4d306941bdc1422de552a072eee4ee5282" alt="FlexboxFeature" />
                        <h2 className='fhead'>Adult Vision</h2>
                        <p className='fpara'>Adults can enroll directly into a choice of two different providers</p>
                    </div>
                    <div className="feature-container">
                        <img src="https://img.freepik.com/free-photo/young-male-psysician-with-patient-measuring-blood-pressure_1303-17879.jpg?w=1060&t=st=1688502648~exp=1688503248~hmac=67e688313704857715e1d491660563a39e43cbf4763654f9964f4159483fb500" alt="FlexboxFeature" />
                        <h2 className='fhead'>Veterans Service</h2>
                        <p className='fpara'>Veterans can get free dental care with our experienced doctors</p>
                    </div>
                </section>
    </section>
    <div class="home">
            
            <div class="home-popular">

                <div class="slider">
                   
                    
                    <ul>
                        <li>
                            <img className="item small1" src="https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191355.jpg?w=1060&t=st=1688505511~exp=1688506111~hmac=8262a286f5a0698b18ca4565301caf23e9ad09cd90c683455c4b012b5c3773d4" alt='imgage'
                            />
                        </li>
                        <li>
                            <img className="item big1"  src="https://img.freepik.com/free-photo/creative-collage-telehealth-consultation_23-2149488757.jpg?w=360&t=st=1688505932~exp=1688506532~hmac=89a05ec53f31fd0c65af23a443cc575ad80e3450babc6fe86696e6cdb97483b1" alt='imgage'
                            />
                        </li>

                        <li>
                            <img className="item focus" src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=900&t=st=1688505663~exp=1688506263~hmac=ccf4c7c7414fc92d72e9270d3e194c427b0b998d71ef942e844b76c4a440bdf5" alt='imgage'
                             />
                        </li>

                        <li>
                            <img className="item big2" src="https://img.freepik.com/free-photo/elderly-female-smiling-with-doctor-visiting-senior-patient-woman-hospital-ward_1150-21710.jpg?w=1060&t=st=1688505735~exp=1688506335~hmac=468ab4015749ea58216130f279b4525fa3ed6d02fa1cf195b336393d10badb59" alt='imgage'
                            />
                        </li>

                        <li>
                            <img className="item small2"  src="https://img.freepik.com/free-photo/smiling-young-female-doctor-holding-clipboard-hospital_231208-13041.jpg?w=1060&t=st=1688505617~exp=1688506217~hmac=9f0f633b5ce08dfabe669f0b1363ac4bf7012157ed287f35a1350bc586037d03" alt='imgage'
                             />
                        </li>
                    </ul>

                  
                </div>

               
            </div>

            <div class="home-header">
                <h1>Experience</h1>
                <h1 className='hhead'>World-Class</h1>
                <h1>HealthCare</h1>
            </div>
            
        </div>
     
        <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="home">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="About">About</a></li>
      <li class="menu__item"><a class="menu__link" href="Services">Services</a></li>
      <li class="menu__item"><a class="menu__link" href="Team">Team</a></li>
      <li class="menu__item"><a class="menu__link" href="Contact">Contact</a></li>

    </ul>
    <p>&copy;2023 UNIQUE HEALTHCARE | All Rights Reserved</p>
  </footer>
      
    </div>
  )
}

export default Home
