import React, { useEffect } from 'react';
import NestedList from './sidebar.jsx';
import AdminHeader from './AdminHeader.jsx';
import { Outlet, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const AdminDashboard = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['loggedin']);
    const navigate = useNavigate();
    useEffect(() => {
        if (cookies.loggedin == undefined || cookies.admin == undefined) {
            navigate("/logout")
        }
        if (cookies.loggedin !== "active" && cookies.admin != "true") {
            navigate("/logout")
        }
    })
    return (
        <>
            <div className="container-fuild">
                <div className="row" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                    <div className="col-2" style={{ paddingRight: "0px" }}>
                        <NestedList />
                    </div>
                    <div className="col-10" style={{ paddingLeft: "0px", paddingRight: "0px" }}>

                        <AdminHeader />
                        <div className="container">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;