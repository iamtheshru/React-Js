import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
// import Dashborddata from './components/Dashborddata.jsx';
import Adminprofile from './pages/Adminprofile.jsx';
import Employees from './pages/Employees.jsx';
import Profile from './components/Profile.jsx';
import Team from './components/Team.jsx';
import Project from './components/Project.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Dashborddata />} /> */}
          <Route path="adminprofile" element={<Adminprofile />}>
            <Route path='profile' element={<Profile />} />
            <Route path='team' element={<Team />} />
            <Route path='project' element={<Project />} />
          </Route>
          <Route path="Employees" element={<Employees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
