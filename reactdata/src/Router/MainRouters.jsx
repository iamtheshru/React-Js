import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from "./../Componanet/Header";
import Home from "../Pages/01Home.jsx";
import About from "../Pages/02About.jsx";
import Contact from "../Pages/03Contact.jsx";
import Example from "../Pages/04Example.jsx";

const FunctionalCompoRoute = React.lazy(() => import('./FunctionalComponentRoute.jsx'));
const ClassCompoRouter = lazy(() => import('./ClassComponanetRouter.jsx'));

const MainRouters = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Home />
            </>
        )
    },
    {
        path: "/about",
        element: (
            <>
                <Header />
                <About />
            </>
        )
    },
    {
        path: "/contact",
        element: (
            <>
                <Header />
                <Contact />
            </>
        )
    },
    {
        path: "/example",
        element: (
            <>
                <Header />
                <Example />
            </>
        ),
        children: [
            {
                path: "/example/functionComponanet/*",
                element: <Suspense fallback={<>Loading....</>}><FunctionalCompoRoute /></Suspense>
            },
            {
                path: "/example/classComponanet/*",
                element: <Suspense fallback={<>Loading....</>}><ClassCompoRouter /></Suspense>
            }
        ]
    },
]);

export default MainRouters;
