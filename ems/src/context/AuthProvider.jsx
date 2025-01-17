import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorege, SetLocalStorege } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    // const data = getLocalStorege();
    // console.log(data);
    useEffect(() => {
        SetLocalStorege();
        const { employees, admin } = getLocalStorege();
        setUserData({ employees, admin });
    }, [])

    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
