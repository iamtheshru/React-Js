import React from 'react'
import { Router, useRoutes } from 'react-router-dom';
import ClassCompoMenu from './../Componate/ClassComponent/01ClassCompoMenu.jsx';
import ComponentInReact from './../Componate/ClassComponent/02ComponentInReact.jsx';
import ClassComponentIntro from './../Componate/ClassComponent/03ClassComponentIntro.jsx';
import ExampleOfJsx from './../Componate/ClassComponent/04ExampleOfJsx.jsx';
import ExampleOfEvent from './../Componate/ClassComponent/05ExampleOfEvent.jsx';
import StateInClassCompo from './../Componate/ClassComponent/06StateInClassCompo.jsx';
import PropsInClassCompo from './../Componate/ClassComponent/07PropsInClassCompo.jsx';
import StateLifeCycleInClassCompo from './../Componate/ClassComponent/08StateLifeCycleInClassCompo.jsx';


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
                },
                {
                    path: "event",
                    element: <ExampleOfEvent />
                },
                {
                    path: "state",
                    element: <StateInClassCompo />
                },
                {
                    path: "propsinclass",
                    element: <PropsInClassCompo />
                },
                {
                    path: "statelifecycle",
                    element: <StateLifeCycleInClassCompo />
                }
            ]
        }
    ])
    return routes;
}

export default ClassComponentRoute;