import { createBrowserRouter } from "react-router-dom";
import HeaderComponent from "../CommonCompo/HeaderCompo.jsx";
import Login from "../CommonCompo/Login.jsx";
import Signup from "../CommonCompo/Signup.jsx";
import Admin from "../CommonCompo/Admin.jsx";
import React, { Suspense } from "react";

// const AdminRoute = React.lazy(() => { return import('./AdminRouter.jsx') })
const Mainroute = createBrowserRouter([
    {
        path: "/",
        element: <>
            <HeaderComponent />
        </>,

    },
    {
        path: "/login",
        element: <>
            <HeaderComponent />
            <Login />
        </>,

    },
    {
        path: "/signup",
        element: <>
            <HeaderComponent />
            <Signup />
        </>,
    },
    {
        path: "/admin",
        element: <>
            <HeaderComponent />
            <Admin />
        </>,
    },
    // {
    //     path: "/admin/*",
    //     element: <>
    //         <Suspense fallback={<h2>Loading....</h2>}><AdminRoute /></Suspense>
    //     </>,

    // }
])
export default Mainroute;