import React, { useEffect, useState } from 'react';
import Sidebar from '../SideBar';
import Navbar from '../Navbar';
import axios from 'axios';
import { Variable } from '../../../Assets/Variable';
import './Patient.css'
const Patient = () => {
    const [patientDetails, setpatientDetails] = useState([])
    const fetchDoctorDetails = async () => {
        try {
            await axios.get(Variable.PATIENT_URL)
                .then(res => setpatientDetails(res.data))
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchDoctorDetails();
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
                                    <h6 class="card-text">Address : {a.address}</h6>
                                    <h6 class="card-text">Gender : {a.gender}</h6>
                                    <h6 class="card-text">phone : {a.phone}</h6>
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
