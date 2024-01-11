import { createBrowserRouter } from "react-router-dom";
import HeaderComponent from "./CommonCompo/HeaderCompo.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Aboutpage from './Pages/Aboutpage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import AccessStorePage from './Pages/AccessStorePage.jsx';



const Mainroute = createBrowserRouter([
    {
        path: "/",
        element: <>
            <HeaderComponent />
            <HomePage />
        </>,

    }, {
        path: "/about",
        element:
            <>
                <HeaderComponent />
                <Aboutpage />
            </>
    }, {
        path: "/contact",
        element:
            <>
                <HeaderComponent />
                <ContactPage />
            </>
    }, {
        path: "/accessstore",
        element:
            <>
                <HeaderComponent />
                <AccessStorePage />
            </>
    }
])
export default Mainroute;