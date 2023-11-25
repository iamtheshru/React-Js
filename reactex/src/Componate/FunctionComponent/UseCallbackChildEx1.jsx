import React, { memo, useRef } from "react";

const UseCallbackChildEx1 = ({ tasks, addTask }) => {
    console.log("child rendered");
    // let node = useRef('')

    return (<>
        <h2>Tasks list</h2>
        <ul>{tasks.map(task => <li key={task}>{task}</li>)}</ul>
        {/* <input type="text" ref={node => node && node.focus()} /> */}
        <button onClick={addTask}>Add Task</button>
        {/* <button onClick={() => addTask(node.value)}>Add Task</button> */}
        <br /><br />
    </>);
}

export default memo(UseCallbackChildEx1);