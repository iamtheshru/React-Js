import { createBrowserRouter, Link } from "react-router-dom";
import Header from "./../Componate/Header";
import Home from "./../Pages/Home";
import About  from "../Pages/About";


const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Home />
            </>
        ),
    }, {
        path: "/about",
        element: (
            <>
                <Header />
                <About />
            </>
        ),
    },
]);

export default MainRouter;