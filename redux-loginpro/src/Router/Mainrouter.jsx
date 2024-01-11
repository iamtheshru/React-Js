import { createBrowserRouter } from "react-router-dom";
import HeaderComponent from "../CommonCompo/HeaderCompo.jsx";
const Mainroute = createBrowserRouter([
    {
        path: "/",
        element: <>
            <HeaderComponent />
        </>,

    }
])
export default Mainroute;