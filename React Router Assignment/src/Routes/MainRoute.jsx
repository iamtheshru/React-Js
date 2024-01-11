import { createBrowserRouter } from "react-router-dom";
import Header from "../Component/Header";
import Admin from "../Pages/Admin";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: (<>
            <Header />
        </>)
    },
    {
        path:"/admin",
        element:(<>
            <Admin/>
        </>)
    }
])

export default MainRoute;