import React from "react";
import Header from "./../Componente/Header.jsx";
import SpecialOffers from "./../Componente/SpecialOffers.jsx";
import AllProducts from "./../Pages/AllProducts.jsx";
import ChairData from "./../Pages/ChairData.jsx";
import SofaData from "./../Pages/SofaData.jsx";
import StoolData from "./../Pages/StoolData.jsx";
import FootstoolData from "./../Pages/FootstoolData.jsx";
import OfficeData from "./../Pages/OfficeData.jsx";
import { createBrowserRouter } from "react-router-dom";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <SpecialOffers />
            </>
        )
    },
    {
        path: '/allproduct',
        element: (
            <>
                <Header />
                <AllProducts />
            </>
        )
    },
    {
        path: '/chair',
        element: (
            <>
                <Header />
                <ChairData />
            </>
        )
    },
    {
        path: '/sofa',
        element: (
            <>
                <Header />
                <SofaData />
            </>
        )
    },
    {
        path: '/stool',
        element: (
            <>
                <Header />
                <StoolData />
            </>
        )
    },
    {
        path: '/footstool',
        element: (
            <>
                <Header />
                <FootstoolData />
            </>
        )
    },
    {
        path: '/office',
        element: (
            <>
                <Header />
                <OfficeData />
            </>
        )
    }
])


export default MainRouter;