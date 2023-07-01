import { BrowserRouter } from 'react-router-dom';
// import Dashboard from './Admin/Components/Dashboard/Dashboard';
import './App.css';
import AppoinmentBooking from './Patient/AppoinmentBooking/AppoinmentBooking';
// import { useState } from 'react';
// import PatientNavBar from './Patient/PatientNavBar/PatientNavBar';
// import PatientDoctors from './Patient/PatientDoctors/PatientDoctors';
// import Home from './Landing/Home/Home';
// import LandingNavbar from './Landing/LandingNavbar/LandingNavbar';
// import DocrorProfile from './Doctor/DocrorProfile/DocrorProfile';
// import SideBar from './Admin/Components/SideBar';

function App() {
  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  // // Function to toggle the visibility of the popup
  // const togglePopup = () => {
  //   setIsPopupOpen(!isPopupOpen);
  // };

  return (
    <BrowserRouter>
    {/* <AppoinmentBooking/> */}
    {/* <div>
      <button onClick={togglePopup}>Open Popup</button>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
          <AppoinmentBooking/>
            
            <button onClick={togglePopup}>Close Popup</button>
          </div>
        </div>
      )}
    </div> */}
    <AppoinmentBooking/>
    {/* <PatientNavBar/> */}
    {/* <PatientDoctors/> */}
    {/* <SideBar/> */}
    {/* <LandingNavbar/> */}
    {/* <Home/> */}
    {/* <DocrorProfile/> */}
      <div className='App'>

      </div>
    </BrowserRouter>
  );
}

export default App;
