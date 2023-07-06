import React, { useEffect, useState } from 'react'
import './NavCards.css'
import { Variable } from '../../Assets/Variable';
import axios from 'axios';
const NavCards = () => {
  const [patientCount, setpatientCount] = useState([])
  const [doctorCount, setDoctorCount] = useState([])
  const [appoinment, setAppoinmentCount] = useState([])
  const fetchpatient = async () => {
    try {
      await axios.get(Variable.PATIENT_URL)
        .then(res => {
          setpatientCount(res.data)

        })

    } catch (error) {
      console.error(error);
    }
    try {
      await axios.get(Variable.DOCTORAPI_URL)
        .then(res => {
          setDoctorCount(res.data)

        })

    } catch (error) {
      console.error(error);
    }
    try {
      await axios.get(Variable.APPOINMENT_URL)
        .then(res => {
          setAppoinmentCount(res.data)

        })

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('Admin_Token')}`;
    fetchpatient();

  });
  return (
    <div className="NavCards">
      <div className="card-container1">

        <div className="col">
          <div class="card">
            <div class="card-header">
              Registered Users {patientCount.length}
            </div>
            <div class="card-content">

            </div>
          </div>
        </div>
        <div className="col">
          <div class="card">
            <div class="card-header">
              Registered Docters {doctorCount.length}
            </div>
            <div class="card-content">

            </div>
          </div>
        </div>
        <div className="col">
          <div class="card">
            <div class="card-header">
              Appoinments {appoinment.length}
            </div>
            <div class="card-content">

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NavCards
