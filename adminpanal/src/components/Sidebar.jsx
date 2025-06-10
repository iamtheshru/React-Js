import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    return (
        <div className='flex flex-col items-start p-4 bg-gray-100 h-screen w-64'>
            <h2 className='text-xl font-bold mb-4'>Dashboard</h2>
            <div className='mb-4'>
                <Link to="adminprofile" className='text-blue-500 hover:underline'>Admin Profile</Link>
            </div>
            <div className='mb-4'>
                <Link to="Employees" className='text-blue-500 hover:underline'>Employees</Link>
            </div>
            <h3 className='text-lg font-semibold mt-6'>Quick Links</h3>
        </div>
    )
}

export default Sidebar
