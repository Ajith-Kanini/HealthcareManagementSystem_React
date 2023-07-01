import React, { useEffect, useState } from 'react'
import './DocrorProfile.css'
import axios from 'axios';
import { Variable } from '../../Assets/Variable';
const DocrorProfile = () => {

    const [doctorDetails, setdoctorDetails] = useState({})

    const fetchDoctorDetails = async () => {
        try {

            await axios.get(Variable.FULLDOCTOR_DETAILS + 14)
                .then(res => setdoctorDetails(res.data))
        } catch (error) {
            console.error(error);
        }
    };
    const handleUpdate = () => {
        setdoctorDetails({})
    }
    useEffect(() => {
        fetchDoctorDetails();
    });
    return (
        <div className='profileontainer bg-white '>
            <div className="container-fluid mt--7">
                <div className="row">
                    <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                        <div className="card card-profile shadow">
                            <div className="row justify-content-center">
                                <div className="col-lg-3 order-lg-2">
                                    <div className="card-profile-image">
                                        <a href="link " >
                                            <img src={`https://localhost:7052/uploads/${doctorDetails.doctorImage}`} className="rounded-circle" alt="" style={{ marginBottom: '4rem' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                <div className="d-flex justify-content-between">
                                    <a href="link" className={`btn btn-sm mr-4 ${doctorDetails.requestStatus === true ? 'btn-success' : 'btn-danger'}`} >{doctorDetails.requestStatus === true ? 'Verified' : 'Not Verified'}</a>
                                    <a href="link" className="btn btn-info btn-sm btn-default float-right">{doctorDetails.availability === 'Yes' | 'yes' ? 'Available' : 'Not Available'}</a>
                                </div>
                            </div>
                            <div className="card-body pt-0 pt-md-4">
                                <div className="row">
                                    <div className="col">
                                        <div className="card-profile-stats d-flex justify-content-center mt-md-5 mt-5">
                                            <div>
                                                <span className="heading mt-4">22</span>
                                                <span className="description mt-4">Friends</span>
                                            </div>
                                            <div>
                                                <span className="heading mt-4">10</span>
                                                <span className="description mt-4">Photos</span>
                                            </div>
                                            <div>
                                                <span className="heading mt-4">89</span>
                                                <span className="description mt-4">Comments</span>
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
                                    <div className="h5 mt-4">
                                        <i className="ni business_briefcase-24 mr-2"></i>{doctorDetails.specialization}
                                    </div>
                                    <div>
                                        <i className="ni education_hat mr-2"></i>Unique Healthcare
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 order-xl-1">
                        <div className="card bg-secondary shadow">
                            <div className="card-header bg-white border-0">
                                <div className="row align-items-center">
                                    <div className="col-8">
                                        <h3 className="mb-0">My Profile</h3>
                                    </div>
                                    <div className="col-4 text-right">
                                        <a href="link!" className="btn btn-sm btn-primary" onClick={handleUpdate}>Update</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <form>
                                    <h6 className="heading-small text-muted mb-4">My Information</h6>
                                    <div className="pl-lg-4">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" for="input-username">Name</label>
                                                    <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" value={doctorDetails.doctoName} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="form-control-label" for="input-email">Email address</label>
                                                    <input type="email" id="input-email" className="form-control form-control-alternative" value={doctorDetails.email} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" for="input-first-name">Phone Number</label>
                                                    <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="Phone Number" value={doctorDetails.phone} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" for="input-first-name">Specialization</label>
                                                    <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="Specialization" value={doctorDetails.specialization} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" for="input-first-name">Experience</label>
                                                    <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="In years" value={doctorDetails.experienceYears} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className="my-4" />

                                    <h6 className="heading-small text-muted mb-4">Contact information</h6>
                                    <div className="pl-lg-4">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" for="input-address">Address</label>
                                                    <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" type="text" value={doctorDetails.address} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" for="input-city">State</label>
                                                    <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value={doctorDetails.state} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" for="input-country">Country</label>
                                                    <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" value="India" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <button className='btn btn-danger w-100'>Delete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocrorProfile
