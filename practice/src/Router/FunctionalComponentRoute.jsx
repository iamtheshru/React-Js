import React from "react";
import { useRoutes } from "react-router-dom";
import FunctionalCompoMenu from "./../Components/FunctionalComponent/01FunctionalCompoMenu.jsx";
import FunctionalComponetIntro from "./../Components/FunctionalComponent/02Fucntionalcompointro.jsx";


const FunctionalComponentRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <FunctionalCompoMenu />,
            children: [
                {
                    path: "functionalComponetIntro",
                    element: <FunctionalComponetIntro />,
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

export default FunctionalComponentRoute;