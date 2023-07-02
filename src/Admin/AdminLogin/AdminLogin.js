import React, { useState } from 'react'
import './AdminLogin.css'
import { Variable } from '../../Assets/Variable';
import axios from 'axios';
import { toast } from 'react-toastify';
import Sidebar from '../../Admin/Components/SideBar'
import { Route, Routes,useNavigate } from 'react-router-dom';
const AdminLogin = () => {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        adminEmailId: '',
        adminPassword: ''
      });
    const handleAdminLogin=async(event)=>{
        event.preventDefault();
        console.log(formData);
        const response = await axios.post(Variable.ADMIN_URL,formData);
          console.log(response.data);
          localStorage.setItem('Role','Admin')
          localStorage.setItem('Admin_Token',response.data)
          toast.success("welcome");
          
            navigate('/Dashboard')
          
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    return (
        <div>
            <div class="main">
                <p class="sign" align="center">Welcome Admin</p>
                <form class="form1">
                    <input class="un " type="text" align="center" placeholder="Username" name="adminEmailId"
                  onChange={handleInputChange} />
                    <input class="pass" type="password" align="center" placeholder="Password"  name="adminPassword"
                  onChange={handleInputChange}/>
                    <a class="submit" align="center" href="m" onClick={handleAdminLogin}>Sign in</a>
                    <p class="forgot" align="center"><a href="j">Forgot Password?</a></p>

                </form>
            </div>
            <Routes>
                <Route path='/Sidebar' Component={Sidebar}/>
            </Routes>
        </div>
    )
}

export default AdminLogin
