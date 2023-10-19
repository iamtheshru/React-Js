import React from 'react'
import { Router, useRoutes } from 'react-router-dom';
import ClassCompoMenu from './../Componate/ClassComponent/01ClassCompoMenu.jsx';
import ComponentInReact from './../Componate/ClassComponent/02ComponentInReact.jsx';
import ClassComponentIntro from './../Componate/ClassComponent/03ClassComponentIntro.jsx';
import ExampleOfJsx from './../Componate/ClassComponent/04ExampleOfJsx.jsx';
import ExampleOfEvent from './../Componate/ClassComponent/05ExampleOfEvent.jsx';
import StateInClassCompo from './../Componate/ClassComponent/06StateInClassCompo.jsx';
import PropsInClassCompo from './../Componate/ClassComponent/07PropsInClassCompo.jsx';
import StateLifeCycleInClassCompo from './../Componate/ClassComponent/09StateLifeCycleInClassCompo.jsx';
import Statelifecycleloader from './../Componate/ClassComponent/10Statelifecycleloader.jsx';
import ConditionalRendering from './../Componate/ClassComponent/12ConditionalRendering.jsx';
import LoaderExample from './../Componate/ClassComponent/13LoaderExample.jsx';
import ListKeysClassCompo from './../Componate/ClassComponent/15ListKeysClassCompo.jsx';
import DynamicSubMenu from './../Componate/ClassComponent/16DynamicSubMenu.jsx';
import ClassCompoSpreadRest from './../Componate/ClassComponent/17ClassCompoSpreadRest.jsx';
import ControlledCompo from './../Componate/ClassComponent/18ControlledCompo.jsx';
import DynamicSubMenuEx from './../Componate/ClassComponent/19DynamicSubMenuEx.jsx';
import UncontrolledCompo from './../Componate/ClassComponent/20UncontrolledCompo.jsx';
import UncontrolledCompoEx from './../Componate/ClassComponent/21UncontrolledCompoEx.jsx';
import ControlledCompoEx from './../Componate/ClassComponent/22ControlledCompoEx.jsx';
import CompositionVsInheritance from './../Componate/ClassComponent/23CompositionVsInheritance.jsx';
import StateLifting from './../Componate/ClassComponent/20StateLifting/StateLifting.jsx';
import HOCInClass from './../Componate/ClassComponent/21HOC_in_classCompo/mainCompo.jsx';
import HOCInClass1 from './../Componate/ClassComponent/21HOC_in_classCompo/mainCompoEx.jsx';


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
                },
                {
                    path: "statelifecycleloader",
                    element: <Statelifecycleloader />
                },
                {
                    path: "conditionalRendering",
                    element: <ConditionalRendering />
                },
                {
                    path: "loaderExample",
                    element: <LoaderExample />
                },
                {
                    path: "listKeysClassCompo",
                    element: <ListKeysClassCompo />
                },
                {
                    path: "dynamicSubMenu",
                    element: <DynamicSubMenu />
                },
                {
                    path: "classcompospreadrest",
                    element: < ClassCompoSpreadRest />
                },
                {
                    path: "controlledcompo",
                    element: < ControlledCompo />
                },
                {
                    path: "dynamicsubmenuex",
                    element: < DynamicSubMenuEx />
                },
                {
                    path: "uncontrolledcompo",
                    element: < UncontrolledCompo />
                },
                {
                    path: "uncontrolledcompoex",
                    element: < UncontrolledCompoEx />
                },
                {
                    path: "controlledcompoex",
                    element: < ControlledCompoEx />
                },
                {
                    path: "compositionvsinheritance",
                    element: < CompositionVsInheritance />
                },
                {
                    path: "statelifting",
                    element: < StateLifting />
                },
                {
                    path: "hoc",
                    element: < HOCInClass />
                },
                {
                    path: "hoc1",
                    element: < HOCInClass1 />
                }
            ]
        }
    ])
    return routes;
}

export default ClassComponentRoute;