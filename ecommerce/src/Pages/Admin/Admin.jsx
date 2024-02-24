import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader.jsx";
import NestedList from './sidebar.jsx';


const Admin = () => {
    return (<>
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
    </>);
}

export default Admin;