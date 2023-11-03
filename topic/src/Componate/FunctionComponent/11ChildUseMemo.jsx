import React, { memo } from "react";

const ChildUseMemo = (props) => {
    console.log("callbackChild");
    return (
        <>
            <h1>Child Component</h1>
            <button onClick={props.add}>Addition</button>
        </>
    );
}

export default memo(ChildUseMemo);