import React from 'react'
import { useRoutes } from 'react-router-dom'
import FunctionComponanetMenu from './../Componanet/FunctionComponent/01FunctionComponanetMenu.jsx';
import FunctionComponentIntro from './../Componanet/FunctionComponent/02FunctionComponentIntro.jsx';

const FunctionComponanetRouter = () => {
    const router = useRoutes([
        {
            path: "/",
            element: <FunctionComponanetMenu />,
            children: [
                {
                    path: "functioncompointro",
                    element: <FunctionComponentIntro />,
                }
            ]
        }
    ])
    return router
}

export default FunctionComponanetRouter;
