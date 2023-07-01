import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Variable } from '../../Assets/Variable';
import './PatientDoctors.css'
import PatientNavBar from '../PatientNavBar/PatientNavBar';
import Rating from 'react-rating-stars-component';
const PatientDoctors = () => {
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

    const generateRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
      setRandomNumber(randomNumber);
    };
    useEffect(() => {
        fetchDoctorDetails();
    });

    return (
        <div className='container-fluid'>
            <PatientNavBar/>
            <div className="row">
                {
                    doctorDetails.map(doctorDetails =>
                    (
                        <div className="col">
                            <div className="card card-profile shadow">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 order-lg-2">
                                        <div className="card-profile-image">
                                           
                                                <img src={`https://localhost:7052/uploads/${doctorDetails.doctorImage}`} className='card-img-top' height={'150rem'} alt="" style={{ marginBottom: '4rem' }} />
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                    <div className="d-flex justify-content-between">
                                        <a href="link" className={`btn btn-sm mr-4 ${doctorDetails.requestStatus === true ? 'btn-success' : 'btn-danger'}`} >{doctorDetails.requestStatus === true ? 'Verified' : 'Not Verified'}</a>
                                        <a href="link" className="btn btn-info btn-sm btn-default float-right">{doctorDetails.availability === true ? 'Available' : 'Not Available'}</a>
                                    </div>
                                </div>
                                <div className="card-body pt-0 pt-md-4">
                                    <div className="row">
                                        <div className="col">
                                            <div className="card-profile-stats d-flex justify-content-center ">
                                                <div>
                                                    <span className="heading ">{doctorDetails.experienceYears} Yrs</span>
                                                    <span className="description ">Experience</span>
                                                </div>
                                                <div>
                                                    <span className="heading" onChange={generateRandomNumber}>{randomNumber}</span>
                                                    <span className="description ">Appoinments</span>
                                                </div>
                                                
                                                <div>
                                                    <span className="heading ">{doctorDetails.experienceYears + 15 }</span>
                                                    <span className="description ">Completed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h3>
                                            {doctorDetails.doctoName}<span className="font-weight-light"></span>
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
                                    
                                        <div style={{display:'flex',gap:'.2rem',margin:'1rem 5.5rem'}}>
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
