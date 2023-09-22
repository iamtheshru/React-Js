import React,{createBrowserRouter} from "react";
import Header from "./Header"



const MainRouter=createBrowserRouter([
    {
        path:"/",
        element:(
            <>
            <Header/>
            </>
        )
    }
]);

export default MainRouter;