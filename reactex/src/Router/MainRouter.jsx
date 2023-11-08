import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "./../Componate/Header.jsx";
import Home from "./../Pages/Home.jsx";
import About from "./../Pages/About.jsx";
import Contact from "../Pages/Contact.jsx";
import Examples from "../Pages/Example.jsx";


const FunctionalCompoRoute = React.lazy(() => import('./FunctionalComponentRoute.jsx'));
const ClassCompoRoute = lazy(() => import('./ClassComponentRoute.jsx'));

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Home />
            </>
        ),
    }, {
        path: "/about",
        element: (
            <>
                <Header />
                <About />
            </>
        ),
    }, {
        path: "/contact",
        element: (
            <>
                <Header />
                <Contact />
            </>
        ),
    }, {
        path: "/example",
        element: (
            <>
                <Header />
                <Examples />
            </>
        ),
        children: [
            {
                path: "/example/fnctionalComponents/*",
                element: <Suspense fallback={<>Loading....</>}><FunctionalCompoRoute /></Suspense>,
            },
            {
                path: "/example/classComponents/*",
                element: <Suspense fallback={<>Loading....</>}><ClassCompoRoute /></Suspense>,
            }
        ]

    },
]);

export default MainRouter;