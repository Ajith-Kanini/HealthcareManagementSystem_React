import React, { useEffect, useState } from 'react';
import './AppoinmentBooking.css';
import axios from 'axios';
import { Variable } from '../../Assets/Variable';

const AppoinmentBooking = () => {
  const [doctorDetails, setDoctorDetails] = useState([]);
  const [patient, setPatient] = useState({});
  const [special,setSpecial]=useState('')
  const [assignDoctor,setAssignDoctor]=useState('')
  const fetchPatientDetail = async () => {

    try {
      await axios.get(Variable.USER_URL + "/" + 3)
        .then(res => setPatient(res.data));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDoctorDetails = async () => {
  
    try {
      await axios.get(Variable.DOCTORAPI_URL)
        .then(res => {
            setDoctorDetails(res.data.filter(dt => dt.requestStatus === true))
            setAssignDoctor(res.data.find(dt => dt.specialization === special))
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleAppoinmentBooking = async (event) => {
    event.preventDefault(); 
  
    try {
      localStorage.setItem('value', Variable.APPOINMENT_URL);
      const response = await axios.post(Variable.APPOINMENT_URL, {
        diagnose: special,
        appointmentDate: '2020-03-12',
        doctorId: assignDoctor.doctorId,
        patientId: 1,
        isConfirmed: true
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    console.log(special);
  };
  

  useEffect(() => {
    fetchDoctorDetails();
    fetchPatientDetail();
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value
    }));
  };

  return (
    <section className='AppointForm' style={{ backgroundColor: '#378be0' }}>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form>
            <h2 style={{ backgroundColor: '#6A64F1', color: 'white', padding: '.5rem', borderRadius: '.4rem' }}>Book An Appointment</h2>
            <div className="formbold-mb-5">
              <label htmlFor="name" className="formbold-form-label"> Full Name </label>
              <input
                type="text"
                name="name"
                id="name"
                value={patient.firstName}
                placeholder="Full Name"
                className="formbold-form-input"
                onChange={handleChange}
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="phone" className="formbold-form-label"> Phone Number </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={patient.phone}
                placeholder="Enter your phone number"
                className="formbold-form-input"
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="email" className="formbold-form-label"> Email Address </label>
              <input
                type="email"
                name="email"
                id="email"
                value={patient.email}
                placeholder="Enter your email"
                className="formbold-form-input"
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="phone" className="formbold-form-label"> Category </label>
              <select onChange={(e)=>setSpecial(e.target.value)}>
                <option value="">Select the Specialist</option>
                {
                  doctorDetails.map(op => (
                    <option value={op.specialization} key={op.doctorId} className='formbold-form-input'>{op.specialization}</option>
                  ))
                }
              </select>
            </div>
            <div className="flex flex-wrap formbold--mx-3">
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5 w-full">
                  <label htmlFor="date" className="formbold-form-label"> Date </label>
                  <input
                    type="date"
                    name="appointmentDate"
                    id="date"
                    className="formbold-form-input"
                  />
                </div>
              </div>
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <label htmlFor="time" className="formbold-form-label"> Time </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    className="formbold-form-input"
                  />
                </div>
              </div>
            </div>

            <div className="formbold-mb-5 formbold-pt-3">
              <label className="formbold-form-label formbold-form-label-2">
                Address Details
              </label>
              <div className="flex flex-wrap formbold--mx-3">
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Enter area"
                      className="formbold-form-input"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={patient.address}
                      placeholder="Enter city"
                      className="formbold-form-input"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      value={patient.state}
                      placeholder="Enter state"
                      className="formbold-form-input"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      type="text"
                      name="post-code"
                      id="post-code"
                      placeholder="Post Code"
                      className="formbold-form-input"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <input className="formbold-btn" type='submit' value='Book Appointment' onClick={handleAppoinmentBooking} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppoinmentBooking;
