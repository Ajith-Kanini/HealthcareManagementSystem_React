import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Variable } from '../../Assets/Variable';
import './DoctorAppoinment.css'
import { useNavigate } from 'react-router-dom';
const DoctorAppoinment = () => {
    const navigate=useNavigate()
    const [patientDetails, setpatientDetails] = useState([])
    const fetchpatientDetails = async () => {
        try {
            await axios.get(Variable.APPOINMENT_URL)
                .then(res => setpatientDetails(res.data.filter(dt => dt.doctorId === 1)))

        } catch (error) {
            console.error(error);
        }
    };
    const cancelApponment = async (id) => {
        if (window.confirm("You are cancelling your appoinment. Are you sure?")) {
            try {
                const response = await axios.delete(`${Variable.APPOINMENT_URL}/${id}`);
                console.log(response.data);
                alert("Appoinment cancelled")
            } catch (error) {
                console.error(error);
            }
        }
    }
    useEffect(() => {
        if (localStorage.getItem('Role') === 'Doctor') {
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('Doctor_Token')}`;
            fetchpatientDetails();
        }
        else {
            navigate('/LandingHome')
        }
    });

    return (
        <div style={{ margin: '0 4rem', marginTop: '4rem' }}>
            <div className="row">
                {
                    patientDetails.map(item => (
                        <div className="col">
                            <div class=" card card-inverse  " >
                                {/* <img src="assets/Images/SVG/{ c.courseName }.svg" class="card-img-top" alt="ImageDescription" height="150rem" /> */}
                                <h6 class="card-text">Consulting for : {item.diagnose}  </h6>
                                <h6 class="card-text">Date & Time :{item.appointmentDate} </h6>
                                <button class="btn btn-success">Confirm Appoinment</button>
                                <button class="btn btn-danger mt-4" onClick={() => cancelApponment(item.appointmentId)}>Reject Appoinment</button>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default DoctorAppoinment
