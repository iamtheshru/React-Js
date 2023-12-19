import React from 'react';
import { useRoutes } from 'react-router-dom';
import AdminDashboard from './../Pages/Admin/AdminDashboard.jsx';
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
                }
            ]
        }
    ])
    return router;
}

export default AdminRoute;