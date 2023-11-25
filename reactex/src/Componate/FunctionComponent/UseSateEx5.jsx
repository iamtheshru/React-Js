import { useState } from "react";

const UseSateEx5 = () => {
    const [users, setUsers] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const clickHandler = async () => {
        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(JSON.stringify(data, null, "\t"));
        setIsLoading(false);
    }

    let message = '';
    if (isLoading) {
        message = <p>Getting data...</p>;
    }

    return (
        <>
            <h2>Get API and store in state</h2>
            <button onClick={clickHandler}>Get Data</button>
            <p>{message}</p>
            <pre>{users}</pre>
        </>
    );
}

export default UseSateEx5;