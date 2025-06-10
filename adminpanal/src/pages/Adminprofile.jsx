import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Adminprofile = () => {
    const location = useLocation();

    return (
        <div className="p-6">
            <div className="flex space-x-4 mb-6">
                <Link
                    to="profile"
                    className={`px-5 py-2 rounded ${location.pathname.includes('profile')
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-black'
                        }`}
                >
                    Profile
                </Link>

                <Link
                    to="team"
                    className={`px-5 py-2 rounded ${location.pathname.includes('team')
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-black'
                        }`}
                >
                    Teams
                </Link>

                <Link
                    to="project"
                    className={`px-5 py-2 rounded ${location.pathname.includes('project')
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-black'
                        }`}
                >
                    Projects
                </Link>

                <Link
                    to="connections"
                    className={`px-5 py-2 rounded ${location.pathname.includes('connections')
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-black'
                        }`}
                >
                    Connections
                </Link>
            </div>

            {/* Nested Component Display */}
            <Outlet />
        </div>
    );
};

export default Adminprofile;
