import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "./../page/MainPage";
import About from "./../page/About";
import Contactus from "./../page/Contactus";
import Example from "./../page/Example";
import HeaderFile from './../Components/HeaderFile';

const FunctionalCompoRoute = React.lazy(() => { return import('./FunctionalComponentRoute.jsx') })
const ClassCompoRoute = React.lazy(() => { return import('./ClassComponentRoute.jsx') })
const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <HeaderFile />
                <MainPage />
                {/* <h1>Hello World</h1>
                <a href="about">Aboutus</a>
                <Link to="about">About Us</Link> */}
            </>
        ),
    }, {
        path: "/about",
        element: (
            <>
                <HeaderFile />
                <About />
            </>
        ),
    }, {
        path: "/contact",
        element: (
            <>
                <HeaderFile />
                <Contactus />
            </>
        ),
    }, {
        path: "/example",
        element: (
            <>
                <HeaderFile />
                <Example />
            </>
        ),
        children: [
            {
                path: "/example/functionalcomponent/*",
                element: <Suspense fallback={<>Loading....</>} ><FunctionalCompoRoute /></Suspense>,
            },
            {
                path: "/example/classcomponent/*",
                element: <Suspense fallback={<>Loading....</>} ><ClassCompoRoute/></Suspense>,
            },
        ],
    },
])

export default MainRouter;