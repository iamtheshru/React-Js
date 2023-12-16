import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from "./../Componente/Header.jsx";
import Slider from "./../Componente/Slider.jsx";
import About from "./../page/About.jsx";
import Contact from "./../page/Contact.jsx";
import Login from "./../page/Login.jsx";
import Registration from "./../page/Registration.jsx";
import LatestCollection from "./../Componente/LatestCollection.jsx";
import ProductApi from "./../Componente/ProductApi.jsx";
import AllDetails from "./../Componente/AllDetails.jsx";
import SeatSelector from "./../page/SeatSelector.jsx";
import SetLocalStorage from "./../page/SetLocalStorage.jsx";
import CookiesStorage from "./../page/CookiesStorage.jsx";
import Admindahsboard from "./../page/Admindahsboard.jsx";



const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Slider />
                <LatestCollection />
                <ProductApi />
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
    },
    {
        path: "/login",
        element: (
            <>
                <Header />
                <Login />
            </>
        )
    }, {
        path: "/signup",
        element: (
            <>
                <Header />
                <Registration />
            </>
        )
    }, {
        path: "/productsdetails/:id",
        element: (
            <>
                <Header />
                <AllDetails />

            </>
        )
    },
    {
        path: "/seatselector",
        element: (
            <>
                <Header />
                <SeatSelector />

            </>
        )
    }, {
        path: "/setlocalstorage",
        element: (
            <>
                <Header />
                <SetLocalStorage />
            </>
        )
    }, {
        path: "/cookiesstorage",
        element: (
            <>
                <Header />
                <CookiesStorage />
            </>
        )
    }, {
        path: "/admindahsboard",
        element: (
            <>
                {/* <Header /> */}
                <Admindahsboard />
            </>
        )
    }
]);

export default MainRouter;