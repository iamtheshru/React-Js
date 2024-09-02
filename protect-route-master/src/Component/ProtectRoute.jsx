import { Navigate, Outlet } from 'react-router-dom'
function ProtectRoute() {
    let isAuth = localStorage.getItem("token");
    if (!isAuth) return <Navigate to="/" replace />
    return <Outlet />;
}

export default ProtectRoute;

