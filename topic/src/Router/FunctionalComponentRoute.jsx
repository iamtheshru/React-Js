import React from "react";
import { useRoutes } from "react-router-dom";
import FunctionComponentMenu from './../Componate/FunctionComponent/01FunctionComponentMenu.jsx'
import FunctionComponentIntro from './../Componate/FunctionComponent/02FunctionComponentIntro.jsx'
import FunctionalComponentState from './../Componate/FunctionComponent/03FunctionalComponentState.jsx'
import FunctionalComponentProps from './../Componate/FunctionComponent/04FunctionalComponentProps.jsx'
import FunctionalComponentUseEffect from './../Componate/FunctionComponent/05FunctionalComponentUseEffect.jsx'
import FunctionalComponentuselayouteffect from './../Componate/FunctionComponent/06FunctionalComponentuselayouteffect.jsx'
import FunctionalComponentuseEffectAndLayout from './../Componate/FunctionComponent/07FunctionalComponentuseeffectandlayout.jsx'
import FunctionalComponentMeno from './../Componate/FunctionComponent/08FunctionalComponentMeno.jsx'
import FunctionalComponentCallBack from './../Componate/FunctionComponent/09FunctionalComponentCallBack.jsx'
import FunctionalComponentMenoEx from './../Componate/FunctionComponent/10FunctionalComponentMenoEx.jsx'
import FunctionalComponentCallbackEx from './../Componate/FunctionComponent/11FunctionalComponentCallBackEX.jsx'
import FunctionalComponentReducer from './../Componate/FunctionComponent/12FunctionalComponentReducer.jsx'
import FunctionalComponentContext from './../Componate/FunctionComponent/13FunctionalComponentContext.jsx'
import FunctionalComponentUseRef from './../Componate/FunctionComponent/14FunctionalComponentUseRef.jsx'
import FunctionalImperativeHandle from './../Componate/FunctionComponent/ImperativeHandle/15FunctionalImperativeHandle.jsx'

const FunctionComponentRoute = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <FunctionComponentMenu />,
            children: [
                {
                    path: 'functioncompointro',
                    element: <FunctionComponentIntro />
                },
                {
                    path: 'functionalcompostate',
                    element: <FunctionalComponentState />
                },
                {
                    path: 'functionalcompoprops',
                    element: <FunctionalComponentProps />
                },
                {
                    path: 'functionalcomponentuseeffect',
                    element: <FunctionalComponentUseEffect />
                },

                {
                    path: 'functionalcomponentuselayouteffect',
                    element: <FunctionalComponentuselayouteffect />
                },
                {
                    path: 'functionalcomponentuseeffectandlayout',
                    element: <FunctionalComponentuseEffectAndLayout />
                },
                {
                    path: 'functionalcomponentmemo',
                    element: <FunctionalComponentMeno />
                },
                {
                    path: 'functionalcomponentcallback',
                    element: <FunctionalComponentCallBack />
                },
                {
                    path: 'functionalcomponentmemoex',
                    element: <FunctionalComponentMenoEx />
                },
                {
                    path: 'functionalcomponentcallbackex',
                    element: <FunctionalComponentCallbackEx />
                },
                {
                    path: 'functionalcomponentreducer',
                    element: <FunctionalComponentReducer />
                },
                {
                    path: 'functionalcomponentcontext',
                    element: <FunctionalComponentContext />
                },
                {
                    path: 'functionalcomponentuseref',
                    element: <FunctionalComponentUseRef />
                },
                {
                    path: 'functionalimperativehandle',
                    element: <FunctionalImperativeHandle />
                }
            ]
        },

    ])
    return routes
}

export default FunctionComponentRoute;