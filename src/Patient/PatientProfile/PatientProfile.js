import axios from 'axios';
import { Variable } from '../../Assets/Variable';
import React, { useEffect, useState } from 'react'
import './PatientProfile.css'
const PatientProfile = () => {

    const [patient, setPatient] = useState([])
    const fetchpatient = async () => {
        try {
            await axios.get(Variable.PATIENT_URL)
                .then(res => {
                    setPatient(res.data.filter(dt => dt.email === 'siva@gmail.com'))
                    // console.log(res.data);

                })

        } catch (error) {
            console.error(error);
        }
        // console.log(patient);
    };

    useEffect(() => {
        fetchpatient();
    });

    return (
        <div className='ctnr' >
            <div className='container-fluid'>
                <div className="row">
                    {
                        patient.map(patient => (
                            <div className="col">
                                <div className="card card-profile shadow">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-3 order-lg-2">
                                            <div className="card-profile-image">

                                                <img src={`https://localhost:7154/uploads/${patient.patientPhoto}`} className='card-img-top' height={'150rem'} alt="" style={{ marginBottom: '4rem' }} />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                        <div className="d-flex justify-content-between">
                                            <a href="link" className={`btn btn-sm mr-4`} > </a>
                                            <a href="link" > </a>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0 pt-md-4">
                                        <div className="row">
                                            <div className="col">
                                                <div className="card-profile-stats d-flex justify-content-center ">
                                                    <div>
                                                        <span className="heading ">{patient.age} Yrs</span>
                                                        <span className="description ">Age</span>
                                                    </div>
                                                    <div>
                                                        <span className="heading" >10</span>
                                                        <span className="description ">Appoinments</span>
                                                    </div>

                                                    <div>
                                                        <span className="heading ">5</span>
                                                        <span className="description ">Completed</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <h3>
                                                {patient.firstName}<span className="font-weight-light"></span>, {patient.age}
                                            </h3>
                                            <div className="h5 font-weight-300">
                                                <i className="ni location_pin mr-2"></i>{patient.address}, {patient.state}
                                            </div>

                                            <div>
                                                <i className="ni education_hat mr-2"></i>Unique Healthcare
                                            </div >
                                            {/* <button className='appoinment btn btn-primary mt-2'>Book An Appoinment</button> */}

                                            <div style={{ display: 'flex', gap: '.2rem', margin: '1rem 5.5rem' }}>
                                                <i class="fab fa-whatsapp" style={{ color: 'green', height: '1.5rem' }}></i>{patient.phone}
                                            </div>


                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default PatientProfile
