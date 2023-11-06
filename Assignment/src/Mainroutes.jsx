import React, { Suspense } from "react";
import Header from "./Header/Header";
import { createBrowserRouter } from "react-router-dom";
import Example from "./Example";


const Classcomporoutes = React.lazy(()=> import('./Classcompo/Classcomporoutes'));
const Functioncomporoutes = React.lazy(()=> import('./FunctionCompo/Functioncomporoutes'))
const Mainroutes =createBrowserRouter([
    {
        path:"/",
        element:<Header/>
    },
    {
        path:"/example",
        element:<><Header/><Example/></>,
        children:[{
            path:"Classcompo/*",
            element: <Suspense fallback={<div>Loading...</div>}><Classcomporoutes/></Suspense>
        }]
    },
    {
        path:"/example",
        element:<><Header/><Example/></>,
        children:[{
            path:"FunctionCompo/*",
            element: <Suspense fallback={<div>Loading...</div>}><Functioncomporoutes/></Suspense>
        }]
    }
])
 
export default Mainroutes;