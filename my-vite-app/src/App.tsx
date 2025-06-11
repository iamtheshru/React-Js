import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './comm/Login.tsx'
import Dashboard from './comm/dashboard.tsx'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
