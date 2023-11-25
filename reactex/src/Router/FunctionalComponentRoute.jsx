import React from "react";
import { useRoutes } from "react-router-dom";
import FunctionComponentMenu from './../Componate/FunctionComponent/01FunctionComponentMenu.jsx'
import UseSateEx1 from './../Componate/FunctionComponent/UseSateEx1.jsx'
import UseSateEx2 from './../Componate/FunctionComponent/UseSateEx2.jsx'
import UseSateEx3 from './../Componate/FunctionComponent/UseSateEx3.jsx'
import UseSateEx4 from './../Componate/FunctionComponent/UseSateEx4.jsx'
import UseSateEx5 from './../Componate/FunctionComponent/UseSateEx5.jsx'
import UseEffectEx1 from './../Componate/FunctionComponent/02UseEffect1.jsx'
import UseEffectEx2 from './../Componate/FunctionComponent/03UseEffect2.jsx'
import UseEffectEx3 from './../Componate/FunctionComponent/04UseEffect3.jsx'
import UseEffectEx4 from './../Componate/FunctionComponent/05UseEffect4.jsx'
import UseEffectEx5 from './../Componate/FunctionComponent/06UseEffect5.jsx'
import UseLayoutEffectEx1 from './../Componate/FunctionComponent/UseLayoutEffectEx1.jsx'
import UseLayoutEffectEx2 from './../Componate/FunctionComponent/UseLayoutEffectEx2.jsx'
import UseMemoEx1 from './../Componate/FunctionComponent/UseMemoEx1.jsx'
import UseMemoEx2 from './../Componate/FunctionComponent/UseMemoEx2.jsx'
import UseMemoEx3 from './../Componate/FunctionComponent/UseMemoEx3.jsx'
import UseCallbackEx1 from './../Componate/FunctionComponent/UseCallbackEx1.jsx'
import UseCallbackEx2 from './../Componate/FunctionComponent/UseCallbackEx2.jsx'
import UseCallbackEx3 from './../Componate/FunctionComponent/UseCallbackEx3.jsx'
import UseCallbackEx4 from './../Componate/FunctionComponent/UseCallbackEx4.jsx'
import UseCallbackEx5 from './../Componate/FunctionComponent/UseCallbackEx5.jsx'
import UserContextEx1 from './../Componate/FunctionComponent/UserContextEx1.jsx'
import UserContextEx2 from './../Componate/FunctionComponent/UserContextEx2.jsx'
import UseRefEx1 from './../Componate/FunctionComponent/UseRefEx1.jsx'
import UseRefEx2 from './../Componate/FunctionComponent/UseRefEx2.jsx'
import UseImparativeHandleEx1 from './../Componate/FunctionComponent/UseImparativeHandleEx1.jsx'
import UseImparativeHandleEx2 from './../Componate/FunctionComponent/UseImparativeHandleEx2.jsx'
const FunctionComponentRoute = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <FunctionComponentMenu />,
            children: [
                {
                    path: 'usesateex1',
                    element: <UseSateEx1 />
                },
                {
                    path: 'usesateex2',
                    element: <UseSateEx2 />
                },
                {
                    path: 'usesateex3',
                    element: <UseSateEx3 />
                },
                {
                    path: 'usesateex4',
                    element: <UseSateEx4 />
                },
                {
                    path: 'usesateex5',
                    element: <UseSateEx5 />
                },
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
                },
                {
                    path: 'uselayouteffectex1',
                    element: <UseLayoutEffectEx1 />
                },
                {
                    path: 'uselayouteffectex2',
                    element: <UseLayoutEffectEx2 />
                },
                {
                    path: 'usememoex1',
                    element: <UseMemoEx1 />
                },
                {
                    path: 'usememoex2',
                    element: <UseMemoEx2 />
                },
                {
                    path: 'usememoex3',
                    element: <UseMemoEx3 />
                },
                {
                    path: 'usecallbackex1',
                    element: <UseCallbackEx1 />
                },
                {
                    path: 'usecallbackex2',
                    element: <UseCallbackEx2 />
                },
                {
                    path: 'usecallbackex3',
                    element: <UseCallbackEx3 />
                },
                {
                    path: 'usecallbackex4',
                    element: <UseCallbackEx4 />
                },
                {
                    path: 'usecallbackex5',
                    element: <UseCallbackEx5 />
                },
                {
                    path: 'usecontextex1',
                    element: <UserContextEx1 />
                },
                {
                    path: 'usecontextex2',
                    element: <UserContextEx2 />
                },
                {
                    path: 'userefex1',
                    element: <UseRefEx1 />
                },
                {
                    path: 'userefex2',
                    element: <UseRefEx2 />
                },
                {
                    path: 'useimparativehandleex1',
                    element: <UseImparativeHandleEx1 />
                },
                {
                    path: 'useimparativehandleex2',
                    element: <UseImparativeHandleEx2 />
                }
            ]
        },

    ])
    return routes
}

export default FunctionComponentRoute;