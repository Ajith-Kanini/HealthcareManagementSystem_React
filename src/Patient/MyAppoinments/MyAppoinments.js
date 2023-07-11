import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Variable } from '../../Assets/Variable';
import './MyAppoinments.css';
import { useNavigate } from 'react-router-dom';
const MyAppoinments = () => {
    const navigate=useNavigate()
    const [patientDetails, setpatientDetails] = useState([])
    // const [patID, setpatID] = useState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchpatientDetails = async () => {
        try {
            console.log(localStorage.getItem('Id'));
            await axios.get(Variable.APPOINMENT_URL)
                .then(res => setpatientDetails(res.data.filter(dt => dt.patientId === localStorage.get('Id'))))
                console.log(Variable.APPOINMENT_URL);
                console.log(patientDetails);
        } catch (error) {
            console.error(error);
        }
    };
    const cancelApponment=async (id)=>{
        if(window.confirm("You are cancelling your appoinment. Are you sure?") )
        {
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
        if(localStorage.getItem('Role')==='User')
        {
            fetchpatientDetails();
        }
        else{
          navigate('/LandingHome')
        }
        
        
    },[fetchpatientDetails,navigate]);

    return (
        <div style={{ margin: '0 4rem', marginTop: '4rem' }}>
            <div className="row">
                {
                    patientDetails.map(item => (
                        <div className="col" key={item.appointmentId}>
                            <div class=" card card-inverse  " >
                            {/* <img src="assets/Images/SVG/{ c.courseName }.svg" class="card-img-top" alt="ImageDescription" height="150rem" /> */}
                            <h6 class="card-text">Consulting for : {item.diagnose}  </h6>
                            <h6 class="card-text">Date & Time :{item.appointmentDate} </h6>
                            <button class={`btn ${item.isConfirmed===true ? 'btn-success' : 'btn-info'} mt-4`}>{item.isConfirmed===true ? 'Confirmed' : 'Waiting'}</button>
                            <button class="btn btn-danger mt-4" onClick={()=>cancelApponment(item.appointmentId)}>Cancel Appoinment</button>

                        </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default MyAppoinments
