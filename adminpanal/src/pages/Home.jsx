import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';

const Home = () => {
    const { sidebarOpen } = useContext(SidebarContext);

    return (
        <div className='flex'>
            {sidebarOpen && (<div className='w-64'>
                <Sidebar />
            </div>)}
            <div className='flex-1'>
                <Navbar />
                <div className='p-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;
