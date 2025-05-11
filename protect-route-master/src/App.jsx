import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login"
import About from "./Component/About"
import ProtectRoute from "./Component/ProtectRoute.jsx"

function App() {
    
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<ProtectRoute />}>
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>);
}

export default App;