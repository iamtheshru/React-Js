import React, { Suspense } from "react";
import Header from "./../Componente/Header.jsx";
import SpecialOffers from "./../Componente/SpecialOffers.jsx";
import Footer from "./../Componente/Footer.jsx";
import AllProducts from "./../Pages/AllProducts.jsx";
import AllDetails from "./../Pages/AllDetails.jsx";
import ChairData from "./../Pages/ChairData.jsx";
import SofaData from "./../Pages/SofaData.jsx";
import StoolData from "./../Pages/StoolData.jsx";
import FootstoolData from "./../Pages/FootstoolData.jsx";
import OfficeData from "./../Pages/OfficeData.jsx";
import Login from "./../Pages/Login.jsx";
import Card from "./../Pages/Card.jsx";
import AddToCard from "./../Pages/AddToCard.jsx";
import { createBrowserRouter } from "react-router-dom";

const AdminRouter = React.lazy(() => import('./AdminRouter'));
const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <SpecialOffers />
                <AllProducts />
                <Footer />
            </>
        )
    },
    {
        path: '/productsdetails/:id',
        element: (
            <>
                <Header />
                <AllDetails />
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
    },
    {
        path: '/login',
        element: (
            <>
                <Header />
                <Login />
            </>
        )
    },
    {
        path: '/card/:id',
        element: (
            <>
                <Header />
                <Card />
            </>
        )
    },
    {
        path: '/addtocard/:id',
        element: (
            <>
                <Header />
                <AddToCard />
            </>
        )
    },
    {
        path: '/admin/*',
        element: (
            <>
                <Suspense fallback={<h2>Loading...</h2>}><AdminRouter /></Suspense>
            </>
        )
    }
])


export default MainRouter;