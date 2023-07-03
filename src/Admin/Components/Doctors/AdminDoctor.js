import React, { useEffect, useState } from 'react';
import Sidebar from '../SideBar';
import Navbar from '../Navbar';
import './AdminDoctor.css';
import axios from 'axios';
import '../Dashboard/Dashboard.css';
import { Variable } from '../../../Assets/Variable';

const AdminDoctor = () => {

  const [doctorDetails, setDoctorDetails] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  // const [totalDoctors,setTotalDoctors]=useState();
  const fetchDoctorDetails = async () => {
    try {
      await axios.get(Variable.DOCTORAPI_URL)
        .then(res => setDoctorDetails(res.data.filter(dt=>dt.requestStatus===true)))
        // setTotalDoctors(doctorDetails.length)
    } catch (error) {
      console.error(error);
    }
  };
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredDoctors = doctorDetails.filter((doctor) =>
    doctor.specialization.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    fetchDoctorDetails();
  });
  return (
    <section className='Dashboard'>
      <Sidebar />
      <main className='Dashboardmain'>
        <Navbar hdlchange={handleSearchChange}/>
        <div className="doctorContainer">
          <div class="row">
            {filteredDoctors.map((a) => (
          <div class="col-2 card card-inverse  " >
            <img src={`https://localhost:7052/uploads/${a.doctorImage}`} class="card-img-top" alt="ImageDescription" height="150rem"/>
            <h3 class="card-title border-bottom font-monospace">{a.doctoName}</h3>
            <p class="card-text">Specialization : {a.specialization}</p>
            <p class="card-text">Experience in Years : {a.experienceYears}</p>
            <p class="card-text">phone : {a.phone}</p>
            <div id="buttons">
            </div>
            {!a.RequestStatus===true ? <button class="btn btn-success mt-4">Verified</button> : <button class="btn btn-success mt-4">Not Verified</button>}
          </div>
              
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

export default AdminDoctor;
