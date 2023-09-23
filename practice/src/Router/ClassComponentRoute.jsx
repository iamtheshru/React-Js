import React from "react";
import { useRoutes } from "react-router-dom";
import ClassCompoMenu from "./../Components/ClassComponent/01ClassCompoMenu.jsx";
import ClassCompointro from "./../Components/ClassComponent/02ClassCompointro.jsx";


const ClassComponentRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <ClassCompoMenu />,
            children: [
                {
                    path: "ClassCompointro",
                    element: <ClassCompointro />,
                }
                // {
                //     path: "fucntionalhooks",
                //     element: <FunctionalComponetIntro />,
                // },
            ]
        }
    ])
    return routes;
}

export default ClassComponentRoute;