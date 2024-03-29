import React, { Suspense } from "react";
import Header from "./../Componente/Header.jsx";
import DashboadData from "./../Componente/DashboadData.jsx";
import Quotation from "./../Componente/Quotation.jsx";
import { createBrowserRouter } from "react-router-dom";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <DashboadData />

            </>
        )
    },
    {
        path: '/quotation',
        element: (
            <>
                <Header />
                <Quotation />
            </>
        )
    }
])


export default MainRouter;