import { BrowserRouter } from 'react-router-dom';
// import Dashboard from './Admin/Components/Dashboard/Dashboard';
import './App.css';
import DocrorProfile from './Doctor/DocrorProfile/DocrorProfile';
// import SideBar from './Admin/Components/SideBar';

function App() {
  return (
    <BrowserRouter>
    {/* <SideBar/> */}
    <DocrorProfile/>
      <div className='App'>

      </div>
    </BrowserRouter>
  );
}

export default App;
