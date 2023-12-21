import React from 'react';
import { useRoutes } from 'react-router-dom';
import AdminDashboard from './../Pages/Admin/AdminDashboard.jsx';
import EditUser from './../Pages/Admin/Edituser.jsx';
import AllUsers from './../Pages/Admin/AllUsers.jsx';

const AdminRoute = () => {
    const router = useRoutes([
        {
            path: "/",
            element: <AdminDashboard />,
            children: [
                {
                    path: "allusers",
                    element: <AllUsers />,
                }, {
                    path: "edituser/:userid",
                    element: <EditUser />,
                }
            ]
        }
    ])
    return router;
}

export default AdminRoute;