import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from "./module/auth/page/Register"
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
