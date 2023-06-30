import NavCards from './Admin/Components/NavCards';
import SideBar from './Admin/Components/SideBar';
import './App.css';

function App() {
  return (
    <section className='App'>
      <div>
        <SideBar />
      </div>
      <main className='main'>
        <NavCards />
      </main>
    </section>
  );
}

export default App;
