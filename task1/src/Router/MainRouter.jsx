import React, { Suspense } from "react";
import DashboadData from "./../Componente/DashboadData.jsx";
import Details from "./../Componente/Details.jsx";
import { createBrowserRouter } from "react-router-dom";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <DashboadData />
            </>
        )
    },
    {
        path: '/details',
        element: (
            <>
                <Details />
            </>
        )
    }
])


export default MainRouter;