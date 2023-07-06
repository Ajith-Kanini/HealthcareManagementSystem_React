import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Variable } from '../../Assets/Variable';
import './PatientDoctors.css'
import Check from '../../Assets/Image/check.png'
import Rating from 'react-rating-stars-component';
import Navbar from '../../Admin/Components/Navbar';
import { useNavigate } from 'react-router-dom';
const PatientDoctors = () => {
    const navigate=useNavigate()
    const [doctorDetails, setdoctorDetails] = useState([])
    const fetchDoctorDetails = async () => {
        try {
            await axios.get(Variable.DOCTORAPI_URL)
                .then(res => setdoctorDetails(res.data.filter(dt => dt.requestStatus === true)))

        } catch (error) {
            console.error(error);
        }
    };
    const [randomNumber, setRandomNumber] = useState(0);
    const [searchValue, setSearchValue] = useState('');
    const generateRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
      setRandomNumber(randomNumber);
    };
    useEffect(() => {
        if(localStorage.getItem('Role')==='User')
        {
            fetchDoctorDetails();
        }
        else{
            navigate('/Register')
        }
    });
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
      };
    
      const filteredDoctors = doctorDetails.filter((doctor) => {
        const specialization = doctor.specialization || '';
        return specialization.toLowerCase().includes(searchValue.toLowerCase());
      });
    return (
        <div className='container12'>
            <Navbar hdlchange={handleSearchChange}/>
            <div className="row">
                {
                    filteredDoctors.map(doctorDetails =>
                    (
                        <div className="col" key={doctorDetails.doctorId}>
                            <div className="card card-profile shadow">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 order-lg-2">
                                        <div className="card-profile-image">
                                           
                                                <img src={`https://localhost:7052/uploads/${doctorDetails.doctorImage}`} className='card-img-top' height={'150rem'} alt="" style={{ marginBottom: '4rem' }} />
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                   
                                </div>
                                <div className="card-body pt-0 pt-md-4">
                                    <div className="">
                                        <div className="">
                                            <div className="card-profile-stats1  ">
                                                <div className='innerr'>
                                                    <span className="heading1 ">{doctorDetails.experienceYears} Yrs</span>
                                                    <span className="description1 ">Experience</span>
                                                </div>
                                                <div className='innerr'>
                                                    <span className="heading1" onChange={generateRandomNumber}>{randomNumber}</span>
                                                    <span className="description1 ">Appoinments</span>
                                                </div>
                                                
                                                <div className='innerr'>
                                                    <span className="heading1 ">{doctorDetails.experienceYears + 15 }</span>
                                                    <span className="description1 ">Completed</span>
                                                </div>
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h3>
                                        <img src={Check} alt='' height={'30rem'}/>  {doctorDetails.doctoName}<span className="font-weight-light"></span>
                                        </h3>
                                        <div className="h5 font-weight-300">
                                            <i className="ni location_pin mr-2"></i>{doctorDetails.address}, {doctorDetails.state}
                                        </div>
                                        <div className="h5 mt-2">
                                            <i className="ni business_briefcase-24 mr-2"></i>{doctorDetails.specialization}
                                        </div>
                                        <div>
                                            <i className="ni education_hat mr-2"></i>Unique Healthcare
                                        </div >
                                        {/* <button className='appoinment btn btn-primary mt-2'>Book An Appoinment</button> */}
                                    
                                        <div style={{display:'flex',gap:'.2rem',margin:'1rem 6.9rem'}}>
                                        <i class="fab fa-whatsapp" style={{color: 'green',height:'1.5rem'}}></i>{doctorDetails.phone}
                                        </div>


                                        <div>
                                        <Rating count={5} value={doctorDetails.rating} size={24} activeColor='#ffd700' inactiveColor='#e4e4e4' classNames="rating"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default PatientDoctors