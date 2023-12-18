import React from "react";
import Header from "./../Componente/Header.jsx";
import { createBrowserRouter } from "react-router-dom";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
            </>
        )
    }
])


export default MainRouter;