import React, { useEffect, useState } from 'react';
import './DocrorProfile.css';
import axios from 'axios';
import { Variable } from '../../Assets/Variable';
import { useNavigate } from 'react-router-dom';

const DocrorProfile = () => {
  const navigate=useNavigate()
  const [doctorDetails, setDoctorDetails] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [status, setStatus] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [specialization, setSpecialization] = useState('');
  const [experienceYears, setExperienceYears] = useState('');
  const [state, setState] = useState('');

  const fetchDoctorDetails = async () => {
    try {
      const response = await axios.get(Variable.DOCTORAPI_URL);
      const foundDoctor = response.data.find((dt) => dt.email === localStorage.getItem('email'));
      if (foundDoctor) {
        setDoctorDetails(foundDoctor);
        showDetails(foundDoctor);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const showDetails = (doctor) => {
    setName(doctor.doctoName);
    setEmail(doctor.email);
    setPhone(doctor.phone);
    setCity(doctor.address);
    setStatus(doctor.availability ? 'Available' : 'Not Available');
    setProfilePhoto(doctor.doctorImage);
    setSpecialization(doctor.specialization);
    setExperienceYears(doctor.experienceYears);
    setState(doctor.state);
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    showDetails(doctorDetails); // Reset the input fields to original values
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (profilePhoto) {
      formData.append('imageFile', profilePhoto);
    }
    formData.append('specialization', specialization);
    formData.append('experienceYears', experienceYears);
    formData.append('phone', phone);
    formData.append('availability', status);
    formData.append('state', state);
    formData.append('address', city);

    try {
      await axios.put(`${Variable.DOCTOR_UPDATE_PROFILE}/${doctorDetails.doctorId}`, formData);
      setIsEditing(false);
      fetchDoctorDetails();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleDeleteAccount = async (id) => {
    if (window.confirm('Are you sure? It will delete your information permanently')) {
      try {
        await axios.delete(`${Variable.DOCTORAPI_URL}/${id}`);
        localStorage.clear();
        navigate('/LandingHome')
        // Perform any necessary cleanup or redirect after deletion
      } catch (error) {
        console.error('Error deleting account:', error);
      }
    }
  };

  const handleUploadPhoto = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
  };

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('Doctor_Token')}`;
    fetchDoctorDetails();
  });

  return (
    <div className="profile-container">
      {!isEditing ? (
        <>
          <div className="profile-photo-container">
            <img
              src={`https://localhost:7052/uploads/${profilePhoto}`}
              alt="UserPhoto"
              className="profile-photo"
              onClick={handleEditProfile}
            />
            <input
              type="file"
              accept="image/*"
              id="upload-photo"
              className="form-control"
              style={{ display: 'none' }}
              onChange={handleUploadPhoto}
            />
            <label htmlFor="upload-photo" className="upload-label">
              <i className="fas fa-upload"></i>
            </label>
          </div>
          <h2>{name} </h2>
          <p>Profile Status : <span className={doctorDetails.requestStatus===true ? 'text-success' : 'text-danger'}>{doctorDetails.requestStatus===true ? 'Verified' : ' Not Verified'}</span></p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>City: {city}</p>
          <p>Status: {status}</p>
          <p>Specialization: {specialization}</p>
          <p>Experience: {experienceYears} years</p>
          <p>State: {state}</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
            <button onClick={handleEditProfile} className="edit-button btn btn-primary">
              Edit
            </button>
            <button onClick={() => handleDeleteAccount(doctorDetails.doctorId)} className="edit-button btn btn-danger">
              Delete
            </button>
          </div>
        </>
      ) : (
        <div className="edit-form">
          <h2>Edit Profile</h2>
          <form onSubmit={handleSaveProfile}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="Specialization">Specialization:</label>
            <input
              type="text"
              className="form-control"
              id="Specialization"
              name="Specialization"
              placeholder={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              required
            />
            <label htmlFor="experienceYears">Experience:</label>
            <input
              type="number"
              className="form-control"
              id="experienceYears"
              name="experienceYears"
              placeholder={experienceYears}
              onChange={(e) => setExperienceYears(e.target.value)}
              required
            />
            <label htmlFor="state">State:</label>
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              placeholder={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              placeholder={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              placeholder={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label htmlFor="city">City:</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              placeholder={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              className="form-control"
              name="status"
              placeholder={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
            <div className="buttons-container" style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button onClick={handleCancelEdit} className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DocrorProfile;
