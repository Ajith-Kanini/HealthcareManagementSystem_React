import axios from 'axios';
import { Variable } from '../../Assets/Variable';
import React, { useEffect, useState } from 'react'
import './PatientProfile.css'
import { useNavigate } from 'react-router-dom';
const PatientProfile = () => {
  const navigate = useNavigate()
  const [doctorDetails, setDoctorDetails] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patientPhoto, setPatientPhoto] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const fetchDoctorDetails = async () => {
    try {
      const response = await axios.get(Variable.PATIENT_URL);
      const foundDoctor = response.data.find(
        (dt) => dt.email === localStorage.getItem('email')
      );
      if (foundDoctor) {
        setDoctorDetails(foundDoctor);
        showDetails(foundDoctor);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const showDetails = (doctor) => {
    setFirstName(doctor.firstName);
    setLastName(doctor.lastName);
    setPatientPhoto(doctor.patientPhoto);
    setAge(doctor.age);
    setGender(doctor.gender);
    setAddress(doctor.address);
    setState(doctor.state);
    setEmail(doctor.email);
    setPhone(doctor.phone);
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
    if (patientPhoto) {
      formData.append('patientPhoto', patientPhoto);
    }
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('age', age);
    formData.append('gender', gender);
    formData.append('address', address);
    formData.append('state', state);
    formData.append('email', email);
    formData.append('phone', phone);

    try {
      console.log(formData);
      await axios.put(
        `${Variable.PATIENT_UPDATE_PROFILE}/${doctorDetails.patientId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setIsEditing(false);
      fetchDoctorDetails(); // Fetch updated doctor details
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleDeleteAccount = async (id) => {
    if (
      window.confirm('Are you sure? It will delete your information permanently')
    ) {
      try {
        await axios.delete(`${Variable.PATIENT_EMAIL}/${id}`);
        localStorage.clear();
        navigate('/LandingHome')
      } catch (error) {
        console.error('Error deleting account:', error);
      }
    }
  };

  const handleUploadPhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setPatientPhoto(event.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('Role') === 'User') {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
        'Patient_Token'
      )}`;
      fetchDoctorDetails();
    }
    else {
      navigate('/LandingHome')
    }
  });

  return (
    <div className="profile-container">
      {!isEditing ? (
        <>
          <div className="profile-photo-container">
            <img
              src={`https://localhost:7052/uploads/${patientPhoto}`}
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
          <h2>{`${firstName} `}</h2>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Address: {address}</p>
          <p>State: {state}</p>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
            <button
              onClick={handleEditProfile}
              className="edit-button btn btn-primary"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteAccount(doctorDetails.doctorId)}
              className="edit-button btn btn-danger"
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <div className="edit-form">
          <h2>Edit Profile</h2>
          <form onSubmit={handleSaveProfile}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label htmlFor="patientPhoto">Patient Photo:</label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              id="patientPhoto"
              name="patientPhoto"
              onChange={handleUploadPhoto}
            />
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <label htmlFor="gender">Gender:</label>
            <input
              type="text"
              className="form-control"
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label htmlFor="state">State:</label>
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <div className="buttons-container">
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
}

export default PatientProfile
