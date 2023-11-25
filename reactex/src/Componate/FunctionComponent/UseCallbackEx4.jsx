import { useCallback, useEffect, useState } from "react";

const UseCallbackEx4 = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const fetchData = useCallback(async () => {
        const response = await fetch(
            `https://api.github.com/users?since=${page * 25}`
        );
        const nextData = await response.json();
        setUsers((currentData) => [...currentData, ...nextData])
    }, [page])
    useEffect(() => {
        fetchData();
    }, [fetchData])
    const handleScroll = (e) => {
        const { scrolltop, scrollheight, clientheight } = e.target;
        if (scrollheight - scrolltop === clientheight) {
            setPage((prevPage) => prevPage + 1);
        }
    }
    return (<>
        <div onScroll={handleScroll} style={{ overflowY: "scroll", height: "400px" }}>
            <h1>Github users</h1>
            {users.map((item, index) => (
                <div key={index}>{item.id}:{item.login}</div>
            ))}
        </div>
    </>);
}

export default UseCallbackEx4;