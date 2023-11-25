import { useCallback } from "react";
import { useState } from "react";
import Tasks from './UseCallbackChildEx1.jsx'

const UseCallbackEx1 = () => {
    const [count, setCount] = useState(0);
    const [tasks, setTasks] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    }

    const addTask = useCallback(() => {
        setTasks((t) => [...t, "New Task"])
    }, [tasks])
    return (<>
        <h2>UseCallback Ex1</h2>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <div className="first">
            <Tasks tasks={tasks} addTask={addTask} />
            </div>

    </>);
}

export default UseCallbackEx1;