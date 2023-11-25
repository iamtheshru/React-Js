import { useMemo, useState } from "react";

const UseMemoEx2 = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    const increment = () => {
        setCount((count) => count + 1);
    }
    const addTodo = () => {
        setTodos((todos) => [...todos, "New Todo"]);
    }
    return (<>
        <div>
            <div>
                <h2>My todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })}
                <button onClick={addTodo}>Add todo</button>
            </div>
            <div>
                Count :{count}
                <button onClick={increment}>Increment</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    </>);
}
const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};
export default UseMemoEx2;