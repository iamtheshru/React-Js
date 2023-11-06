import { useEffect } from "react";

function Child({ returnComment }) {
    useEffect(() => {
        console.log("Child component mounted");
    }, [returnComment])
    return (
        <>
            <div>{returnComment('Pedro')}</div>
        </>
    );
}

export default Child;
