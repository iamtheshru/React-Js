import React from 'react'
import { Router, useRoutes } from 'react-router-dom';
import ClassCompoMenu from './../Componate/ClassComponent/01ClassCompoMenu.jsx';
import ComponentInReact from './../Componate/ClassComponent/02ComponentInReact.jsx';

const ClassComponentRoute = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <ClassCompoMenu />,
            children: [
                {
                    path: 'whatiscomponate',
                    element: <ComponentInReact />
                }
            ]
        }
    ])
    return routes;
}

export default ClassComponentRoute;