import React from 'react';
import { useRoutes } from 'react-router-dom';
import AdminDashboardHome from './../Pages/Admin/AdminDashboard.jsx';
import Admin from "./../Pages/Admin/Admin.jsx";
import EditUser from "./../Pages/Admin/EditUser.jsx";


const AdminRoute = () => {
    const router = useRoutes([
        {
            path: "/",
            element: <Admin />,
            children: [
                {
                    path: "allusers",
                    element: <AdminDashboardHome />,
                },
                {
                    path: "/edituser/:id",
                    element: <EditUser />,
                }
            ]
        }
    ])
    return router;
}

export default AdminRoute;