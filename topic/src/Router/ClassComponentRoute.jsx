import React from 'react'
import { Router, useRoutes } from 'react-router-dom';
import ClassCompoMenu from './../Componate/ClassComponent/01ClassCompoMenu.jsx';
import ComponentInReact from './../Componate/ClassComponent/02ComponentInReact.jsx';
import ClassComponentIntro from './../Componate/ClassComponent/03ClassComponentIntro.jsx';
import ExampleOfJsx from './../Componate/ClassComponent/04ExampleOfJsx.jsx';


const ClassComponentRoute = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <ClassCompoMenu />,
            children: [
                {
                    path: 'whatiscomponate',
                    element: <ComponentInReact />
                },
                {
                    path: "classcompointro",
                    element: <ClassComponentIntro />
                },
                {
                    path: "jsx",
                    element: <ExampleOfJsx />
                }
            ]
        }
    ])
    return routes;
}

export default ClassComponentRoute;