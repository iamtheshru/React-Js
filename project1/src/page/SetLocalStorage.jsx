import { useEffect, useState } from "react";
// import './portal.css'

const SetLocalStorage = () => {

    useEffect(() => {
        localStorage.setItem('item', JSON.stringify({ 'username': 'data' }));
    }, [])
    return (
        <>
            <h2>LocalStorage </h2>
        </>
    );
};


export default SetLocalStorage;