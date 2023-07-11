import React, { useEffect, useState } from 'react'
import Sidebar from '../SideBar';
import Navbar from '../Navbar';
import './DoctorAction.css'
import axios from 'axios';
import { Variable } from '../../../Assets/Variable';
import { useNavigate } from 'react-router-dom';

const DoctorAction = () => {
    const navigate=useNavigate()
    const [doctorDetails, setdoctorDetails] = useState([])
    const fetchDoctorDetails = async () => {
        try {
            await axios.get(Variable.DOCTORAPI_URL)
                .then(res =>setdoctorDetails(res.data.filter(dt=>dt.requestStatus!==true)))
           
        } catch (error) {
            console.error(error);
        }
    };
    const handleVerifyStatus=(id)=>{
        const updateDto = {
            DoctorId: id,
            RequestStatus: true
          };
      
          axios.put(Variable.DOCTOR_STATUS+id, updateDto)
            .then(response => {
              // Handle the successful response
              console.log('Status updated successfully');
            })
            .catch(error => {
              // Handle the error
              console.error('Error updating status :', error);
            });
    }
    const handleReject=async(id)=>{
       if(window.confirm("Are you sure?"))
       {
        try {
            await axios.delete(`${Variable.DOCTORAPI_URL+"/"+id}`);
            
          } catch (error) {
            console.error('Error deleting item:', error);
          }
       }
    }
    useEffect(() => {
        if(localStorage.getItem('Role')==='Admin')
    {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('Admin_Token')}`;
      fetchDoctorDetails();
    }
    else{
      navigate('/LandingHome')
    }
    },[navigate]);
    return (
        <div>
            <section className='Dashboard'>
                <Sidebar />
                <main className='Dashboardmain'>
                    <Navbar />
                    <div class="container1">
                        <h2>Registered Doctors</h2>
                        <table class="table table-hover">
                            <thead className='bg-primary'>
                                <tr>
                                    <th>Doctor ID</th>
                                    <th>Name</th>
                                    <th>Photo</th>
                                    <th>Specialization</th>
                                    <th>Experience</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    doctorDetails.map(item => (
                                        <tr>
                                            <td>{item.doctorId}</td>
                                            <td>{item.doctoName}</td>
                                            <td><img src={`https://localhost:7052/uploads/${item.doctorImage}`} alt="ProfilePhoto" class="img-thumbnail" /></td>
                                            <td>{item.specialization}</td>
                                            <td>{item.experienceYears}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button className='btn btn-success' onClick={()=>handleVerifyStatus(item.doctorId)}>Approve</button>
                                                <button className='btn btn-danger' onClick={()=>handleReject(item.doctorId)}>Reject</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default DoctorAction
