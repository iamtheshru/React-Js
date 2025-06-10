import React, { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext';
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../data/auth/authSlice';

const Navbar = () => {
    const { setSidebarOpen } = useContext(SidebarContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    }

    const handlelogout = () => {
        localStorage.removeItem("token");
        dispatch(logout());
        navigate("/adminprofile/profile");
    }
    return (
        <>
            <header className='bg-gray-700 text-white '>
                <nav className='flex justify-between items-center p-4'>
                    <button className='text-2xl font-bold' onClick={toggleSidebar}><AiFillStar /></button>
                    <button className='bg-red-600 p-3 rounded' onClick={handlelogout}>Logout</button>
                </nav>
            </header>
        </>
    )
}

export default Navbar
