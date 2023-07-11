import React, { useEffect, useState } from 'react';
import Sidebar from '../SideBar';
import Navbar from '../Navbar';
import axios from 'axios';
import { Variable } from '../../../Assets/Variable';
import './Patient.css'
import { useNavigate } from 'react-router-dom';
const Patient = () => {
    const [patientDetails, setpatientDetails] = useState([])
    const navigate=useNavigate()
    const fetchDoctorDetails = async () => {
        try {
            await axios.get(Variable.PATIENT_URL)
                .then(res => setpatientDetails(res.data))
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        if (localStorage.getItem('Role') === 'Admin') {
          axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('Admin_Token')}`;
          fetchDoctorDetails();
        }
        else {
          navigate('/LandingHome')
        }
      });
    return (
        <div>
            <section className='Dashboard'>
                <Sidebar />
                <main className='Dashboardmain'>
                    <Navbar />
                    <div className="doctorContainer">
                        <div class="row">
                            {patientDetails.map((a) => (
                                <div class="col-2 card card-inverse  " >
                                    {console.log(a.patientPhoto)}
                                    <img src={`https://localhost:7154/uploads/${a.patientPhoto}`} class="card-img-top" alt="ImageDescription" height="150rem" />
                                    <h3 class="card-title border-bottom font-monospace">{a.firstName}</h3>
                                    <p class="card-text">Address : {a.address}</p>
                                    <p class="card-text">Gender : {a.experienceYears}</p>
                                    <p class="card-text">phone : {a.phone}</p>
                                    <div id="buttons">
                                    </div>
                                    {a.RequestStatus ? <button class="btn btn-success mt-4">Verified</button> : <button class="btn btn-success mt-4">Not Verified</button>}
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default Patient
