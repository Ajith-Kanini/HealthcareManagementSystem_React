import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-bootstrap';
import DocrorProfile from './Doctor/DocrorProfile/DocrorProfile';
import AdminLogin from './Admin/AdminLogin/AdminLogin';
import Dashboard from './Admin/Components/Dashboard/Dashboard';
import AdminDoctor from './Admin/Components/Doctors/AdminDoctor';
import Patient from './Admin/Components/Patient/Patient';
import DoctorAction from './Admin/Components/Action/DoctorAction';
import SideBar from './Admin/Components/SideBar';
import Navbar from './Admin/Components/Navbar';
import NavCards from './Admin/Components/NavCards';
import DoctorAppoinment from './Doctor/DoctorAppoinment/DoctorAppoinment';
import DoctorNavBar from './Doctor/DoctorNavBar/DoctorNavBar';
import Footer from './Landing/Footer/Footer';
import Home from './Landing/Home/Home';
import LandingNavbar from './Landing/LandingNavbar/LandingNavbar';
import Register from './Landing/Register';
import AppoinmentBooking from './Patient/AppoinmentBooking/AppoinmentBooking';
import MyAppoinments from './Patient/MyAppoinments/MyAppoinments';
import PatientDoctors from './Patient/PatientDoctors/PatientDoctors';
import PatientHomePage from './Patient/PatientHomePage/PatientHomePage';
import PatientNavBar from './Patient/PatientNavBar/PatientNavBar';
import PatientProfile from './Patient/PatientProfile/PatientProfile';


function App() {
 
  return (
    <BrowserRouter>
    <ToastContainer/>
      <div className='App'>
        {localStorage.getItem('Role')==='User' && <PatientNavBar/>}
        {localStorage.getItem('Role')==='Doctor' && <DoctorNavBar/>}  
        {!localStorage.getItem('Role') && <LandingNavbar/>} 
        { localStorage.getItem('Role'==='Admin') && <Dashboard/>}   
      </div>

        <Routes>
        <Route path='' Component={Home}/>
          <Route path='/AdminLogin' Component={AdminLogin}/>
          <Route path='/Dashboard' Component={Dashboard}/>
          <Route path='/AdminDoctor' Component={AdminDoctor}/>
          <Route path='/AdminPatient' Component={Patient}/>
          <Route path='/AdminAction' Component={DoctorAction}/>
          <Route path='/AdminSidebar' Component={SideBar}/>
          <Route path='/AdminNavbar' Component={Navbar}/>
          <Route path='/AdminNavCard' Component={NavCards}/>
          <Route path='/DoctorProfile' Component={DocrorProfile}/>
          <Route path='/DoctorAppoinment' Component={DoctorAppoinment}/>
          <Route path='/DoctorNavbar' Component={DoctorNavBar}/>
          <Route path='/LandingFooter' Component={Footer}/>
          <Route path='/LandingHome' Component={Home}/>
          <Route path='/LandingNavbar' Component={LandingNavbar}/>
          <Route path='/Register' Component={Register}/>
          <Route path='/PatientAppoinmentBooking' Component={AppoinmentBooking}/>
          <Route path='/PatientMyAppoinments' Component={MyAppoinments}/>
          <Route path='/PatientDoctors' Component={PatientDoctors}/>
          <Route path='/PatientHomePage' Component={PatientHomePage}/>
          <Route path='/PatientNavbar' Component={PatientNavBar}/>
          <Route path='/PatientProfile' Component={PatientProfile}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;


