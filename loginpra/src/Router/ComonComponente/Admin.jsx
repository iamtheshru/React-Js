import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx'
import Sidbar from './Sidbar.jsx'
// import AllUser from './AllUser.jsx'


const Admin = () => {
    return (<>
        <Navbar />
        <Sidbar />
        {/* <AllUser /> */}
    </>);
}

export default Admin;