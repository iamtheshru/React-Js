import React from 'react';
import { useNavigate } from "react-router-dom";
import Usedata from "./users.jsx";


function Navbar() {

    const navigate = useNavigate()
    const handlelogout = () => {
        localStorage.removeItem("token");
        // localStorage.removeItem("use")
        navigate("/login")
    }
    return (<>
        <nav className="flex justify-center items-center bg-black text-white">
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <ul className=" flex px-4">
                <li className='px-2'>Home</li>
                <li className='px-2'>About</li>
                <li className='px-2'>Contact</li>
            </ul>
            <button className="bg-red-400 p-2 rounded m-2" onClick={handlelogout}>Logout</button>
        </nav>

        <Usedata />
    </>);
}

export default Navbar;
