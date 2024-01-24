import React from 'react';
import { useRoutes } from 'react-router-dom';
// import AdminDashboard from './../Pages/Admin/AdminDashboard.jsx';
import Admin from "./../Pages/Admin/Admin.jsx";
import AdminDashboardHome from "./../Pages/Admin/AdminDashboardHome.jsx";


const AdminRoute = () => {
    const router = useRoutes([
        {
            path: "/",
            element: <Admin />,
            children: [
                {
                    path: "dashboard",
                    element: <AdminDashboardHome />,
                }
            ]
        }
    ])
    return router;
}

export default AdminRoute;