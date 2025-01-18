import React, { useState } from 'react'
import { SetLocalStorege } from '../../utils/localStorage';

const Header = (props) => {
    // console.log(data);
    // const [username, setUsername] = useState('');

    // if (!data) {
    //     setUsername("admin");
    // } else {
    //     setUsername(data.fristName);
    // }

    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        // window.location.reload()
        props.changeUser('');
        // console.log(props.changeUser);

    }

    return (
        <>
            <div className='flex items-end justify-between'>
                <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>aa👋</span></h1>
                <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
            </div>
        </>
    )
}

export default Header
