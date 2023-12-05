import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from "./../Componente/Header.jsx";
import Slider from "./../Componente/Slider.jsx";
import About from "./../page/About.jsx";
import Contact from "./../page/Contact.jsx";
import Login from "./../page/Login.jsx";


const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Slider />
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
        path: "/contact",
        element: (
            <>
                <Header />
                <Contact />
            </>
        )
    }, {
        path: "/login",
        element: (
            <>
                <Header />
                <Login />
            </>
        )
    }
]);

export default MainRouter;