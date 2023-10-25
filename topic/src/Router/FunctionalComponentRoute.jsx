import React from "react";
import { useRoutes } from "react-router-dom";
import FunctionComponentMenu from './../Componate/FunctionComponent/01FunctionComponentMenu.jsx'
import FunctionComponentIntro from './../Componate/FunctionComponent/02FunctionComponentIntro.jsx'
import FunctionalComponentState from './../Componate/FunctionComponent/03FunctionalComponentState.jsx'
import FunctionalComponentProps from './../Componate/FunctionComponent/04FunctionalComponentProps.jsx'

const FunctionComponentRoute = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <FunctionComponentMenu />,
            children: [
                {
                    path: 'functioncompointro',
                    element: <FunctionComponentIntro />
                },
                {
                    path: 'functionalcompostate',
                    element: <FunctionalComponentState />
                },
                {
                    path: 'functionalcompoprops',
                    element: <FunctionalComponentProps />
                }
            ]
        },

    ])
    return routes
}

export default FunctionComponentRoute;