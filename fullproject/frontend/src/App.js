import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./Componente/login";
import Navbar from "./Componente/Navber.jsx";
import ProtectRoute from "./Componente/Protectrouter.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectRoute />}>
          <Route path="/login/navbar" element={<Navbar />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;