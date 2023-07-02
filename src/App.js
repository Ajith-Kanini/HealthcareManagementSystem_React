import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
// import PrivateRoute from './PrivateRoute/PrivateRoute'
import { ToastContainer } from 'react-bootstrap';
// import DoctorNavBar from './Doctor/DoctorNavBar/DoctorNavBar';
// import LandingNavBar from './Landing/LandingNavbar/LandingNavbar'
import AdminLogin from './Admin/AdminLogin/AdminLogin';
import SideBar from './Admin/Components/SideBar';
import Dashboard from './Admin/Components/Dashboard/Dashboard';
import AdminDoctor from './Admin/Components/Doctors/AdminDoctor';
import Patient from './Admin/Components/Patient/Patient';
import DoctorAction from './Admin/Components/Action/DoctorAction';
// import PatientNavBar from './Patient/PatientNavBar/PatientNavBar'
// import AdminLogin from './Admin/AdminLogin/AdminLogin';

function App() {
 
  return (
    <BrowserRouter>
    {/* <AdminLogin/> */}
    {/* <DoctorNavBar/> */}
    {/* <LandingNavBar/> */}
    <ToastContainer/>
      <div className='App'>
        {/* {localStorage.getItem('Role')==='User' && <PatientNavBar/>} */}
        {/* {localStorage.getItem('Role')==='Doctor' && <DoctorNavBar/>}   */}
        {/* {!localStorage.getItem('Role') && <LandingNavBar/>}  */}
        {!localStorage.getItem('Role'==='Admin') && <SideBar/>}   
      </div>

        <Routes>

          <Route path='/AdminLogin' Component={AdminLogin}/>
          <Route path='/SidebBAR' Component={SideBar}/>
          <Route path='/Dashboard' Component={Dashboard}/>
          <Route path='/AdminDoctor' Component={AdminDoctor}/>
          <Route path='/AdminPatient' Component={Patient}/>
          <Route path='/AdminAction' Component={DoctorAction}/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
