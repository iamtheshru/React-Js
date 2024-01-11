import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from './action.js';

const Cart = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.count);

    return (<>
        <div className="APP">
            <button onClick={() => { dispatch(increment()) }}>+</button>
            <h1>{counter}</h1>
            <button onClick={() => { dispatch(decrement()) }}>-</button>
            <button onClick={() => { dispatch(() => { return { type: "inc" } }) }}>
                +</button>
            <h1>{counter}</h1>
            <button onClick={() => { dispatch({ type: "inc" }) }}>-</button>
        </div>
    </>);

}

export default Cart;