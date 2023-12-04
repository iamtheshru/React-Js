import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from "./../Componente/Header.jsx";
import Slider from "./../Componente/Slider.jsx";


const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Slider />
            </>
        )
    }
]);

export default MainRouter;