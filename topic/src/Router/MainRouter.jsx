import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "./../Componate/Header";
import Home from "./../Pages/Home";
import About from "./../Pages/About";
import Contact from "../Pages/Contact";
import Examples from "../Pages/Example";


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
                element: <Suspense fallback={<>Loading....</>}><ClassCompoRoute/></Suspense>,
            }
        ]

    },
]);

export default MainRouter;