import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from "./module/auth/page/Register"
import Login from "./module/auth/page/Login"
import Dashboard from "./module/auth/page/Dashboard"

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
