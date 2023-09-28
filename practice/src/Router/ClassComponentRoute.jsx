import React from "react";
import { useRoutes } from "react-router-dom";
import ClassComponentMenu from '../Components/ClassComponent/ClassComponentMenu.jsx';
import ClassComponentIntro from '../Components/ClassComponent/ClassComponentIntro.jsx';
import Whatiscomponent from '../Components/ClassComponent/Whatiscomponent.jsx';
import ExampleOfJSX from '../Components/ClassComponent/ExampleOfJSX.jsx';
import ExampleOfEvent from '../Components/ClassComponent/ExampleOfEvent.jsx';
import StateInClassCompo from '../Components/ClassComponent/StateInClassCompo.jsx';

const ClassComponentRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <ClassComponentMenu />,
            children: [
                {
                    path: "/whatiscomponent",
                    element: <Whatiscomponent />
                },
                {
                    path: "/classcompointro",
                    element: <ClassComponentIntro />
                },
                {
                    path: "jsx",
                    element: <ExampleOfJSX />
                },
                {
                    path: "event",
                    element: <ExampleOfEvent />
                },
                {
                    path: "state",
                    element: <StateInClassCompo />
                }
            ]
        }
    ])
    return routes
};

export default ClassComponentRoute;