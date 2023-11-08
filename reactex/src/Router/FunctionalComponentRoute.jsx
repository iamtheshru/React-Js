import React from "react";
import { useRoutes } from "react-router-dom";
import FunctionComponentMenu from './../Componate/FunctionComponent/01FunctionComponentMenu.jsx'
import UseEffectEx1 from './../Componate/FunctionComponent/02UseEffect1.jsx'
import UseEffectEx2 from './../Componate/FunctionComponent/03UseEffect2.jsx'
import UseEffectEx3 from './../Componate/FunctionComponent/04UseEffect3.jsx'
import UseEffectEx4 from './../Componate/FunctionComponent/05UseEffect4.jsx'
import UseEffectEx5 from './../Componate/FunctionComponent/06UseEffect5.jsx'
const FunctionComponentRoute = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <FunctionComponentMenu />,
            children: [
                {
                    path: 'useeffectex1',
                    element: <UseEffectEx1 />
                },
                {
                    path: 'useeffectEx2',
                    element: <UseEffectEx2 />
                },
                {
                    path: 'useeffectEx3',
                    element: <UseEffectEx3 />
                },
                {
                    path: 'useeffectEx4',
                    element: <UseEffectEx4 />
                },
                {
                    path: 'useeffectEx5',
                    element: <UseEffectEx5 />
                }
            ]
        },

    ])
    return routes
}

export default FunctionComponentRoute;