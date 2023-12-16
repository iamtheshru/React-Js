import { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
// import './portal.css'

const SetLocalStorage = () => {

    const [item, setItem] = useCookies("aa")

    useEffect(() => {
        setItem('item', JSON.stringify({ 'username': 'data' }));
    }, [])
    return (
        <>
            <h2>Cookies </h2>
        </>
    );
};


export default SetLocalStorage;