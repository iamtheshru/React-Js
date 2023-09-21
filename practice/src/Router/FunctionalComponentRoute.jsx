import React from "react";
import { useRoutes } from "react-router-dom";
import FunctionalCompoMenu from "../Components/FunctionalComponent/01FunctionalCompoMenu";
import FunctionalComponetIntro from "./../Components/FunctionalComponent/02fucntionalcompointro";


const FunctionalComponentRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            Element: <FunctionalCompoMenu />,
            children: [
                {
                    path: "functionalcompointro",
                    element: <FunctionalComponetIntro />,
                },
                {
                    path: "fucntionalhooks",
                    element: <FunctionalComponetIntro />,
                },
            ]
        }
    ])
    return routes;
}

export default FunctionalComponentRoute;