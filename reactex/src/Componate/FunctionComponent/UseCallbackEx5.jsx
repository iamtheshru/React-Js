import { useCallback ,useState } from "react";
import Todoltem from './UseCallbackChildEx2.jsx'

const UseCallbackEx5 = () => {
    const [todos, setTodos] = useState([
        { id: 1, name: "Todo 1", completed: false },
        { id: 2, name: "Todo 2", completed: false },
        { id: 3, name: "Todo 3", completed: false },
        { id: 4, name: "Todo 4", completed: false }
    ]);

    const handleToggle = useCallback((id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }, []);
    return (<>
        <ul>
            {todos.map((todo) => (<Todoltem key={todo.id} item={todo} onToggle={handleToggle} />
            ))}
        </ul>
    </>);
}

export default UseCallbackEx5;