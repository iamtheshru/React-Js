import React from "react";
import { useRoutes } from "react-router-dom";
import FunctionComponentMenu from './../Componate/FunctionComponent/01FunctionComponentMenu.jsx'
import FunctionComponentIntro from './../Componate/FunctionComponent/02FunctionComponentIntro.jsx'

const FunctionComponentRoute = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <FunctionComponentMenu />,
            children: [
                {
                    path: 'functioncompointro',
                    element: <FunctionComponentIntro />
                }
            ]
        },

    ])
    return routes
}

export default FunctionComponentRoute;