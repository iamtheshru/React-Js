import React from 'react'
import { Link } from 'react-router-dom'

const Dashborddata = () => {

    const data = [
        { id: 1, to: "/Adminprofile", name: "Admin Profile" },
        { id: 2, to: "/Employees", name: "Employees" }
    ]
    return (
        <div>
            {data.map((item) => (
                <div key={item.id} className='bg-gray-200 p-4 m-2 rounded-lg shadow-md'>
                    <Link to={item.to}>{item.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default Dashborddata
