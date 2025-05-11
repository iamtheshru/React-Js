import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './comp/Home.jsx'
import Register from './comp/Register.jsx'
import Login from './comp/Login.jsx'
import Protectroute from './comp/Protectroute.jsx'
import Pagination from './comp/Pagination.jsx'
import Carddata from './comp/Card.jsx'
import Addtocard from './comp/Addtocard.jsx'
import Forgotpassword from './comp/Forgotpassword.jsx'
import Resetpassword from './comp/Resetpassword.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protectroute> <Home /> </Protectroute >} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/reset-password" element={<Resetpassword />} />
          <Route path="/carddata/:id" element={<Carddata />} />
          <Route path="/addtocard" element={<Addtocard />} />
          <Route path="/pagination" element={<Pagination />} />
        </Routes >
      </BrowserRouter >
    </>

  );
}

export default App;
