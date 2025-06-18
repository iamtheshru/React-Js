// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Register from "./module/auth/page/Register"
// import Login from "./module/auth/page/Login"
// import Dashboard from "./module/auth/page/Dashboard"
// import Forgetpassword from "./module/auth/page/Forgetpassword"
// import Resetpassword from "./module/auth/page/resetpassword"

// import './App.css'

// function App() {

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Login />} />
//           <Route path='/register' element={<Register />} />
//           <Route path='/dashboard' element={<Dashboard />} />
//           <Route path='/forgetpassword' element={<Forgetpassword />} />
//           <Route path='/reset-password/:token' element={<Resetpassword />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./module/auth/page/Dashboard";
import User from "./module/auth/page/user/User";
import Login from "./module/auth/page/Login";
import Register from "./module/auth/page/Register";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router >
  );
}

export default App;

