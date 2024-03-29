import { createBrowserRouter } from "react-router-dom";
import Headers from './ComonComponente/Headers.jsx'
import Login from './ComonComponente/Login.jsx'
import Admin from './ComonComponente/Admin.jsx'
import AllUser from './ComonComponente/AllUser.jsx'
import EditUser from './ComonComponente/Edituser.jsx'

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Headers />

            </>
        )

    },
    {
        path: "/login",
        element: (
            <>
                <Headers />
                <Login />
            </>

        )

    },
    {
        path: "/admin",
        element: (
            <Admin />
        )
    },
    {
        path: "/alluser",
        element: (
            <>
                {/* <Admin />, */}
                <AllUser />
            </>

        )

    },
    {
        path: "/edituser/:id",
        element: (
            <>
                {/* <Admin />, */}
                <EditUser />
            </>

        )

    }
])

export default MainRouter;