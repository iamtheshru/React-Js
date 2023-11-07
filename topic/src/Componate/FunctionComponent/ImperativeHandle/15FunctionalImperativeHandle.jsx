import { useRef } from "react";
import ButtonCompo from './ButtonCompo.jsx'

const FunctionalImperativeHandle = () => {
    const buttonRef = useRef(null);

    return (
        <>
            <button onClick={(event) => { buttonRef.current.alertToggle() }}>Click</button>
            <ButtonCompo ref={buttonRef} data="this will contains props data" />
            <p>useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.</p>
            <p>In React, data is passed from parent to child components via props, in what is known as unidirectional data flow. The parent component cannot directly call a function defined in the child component or reach down to grab a value for itself.</p>
            <p> In certain circumstances, we want our parent component to reach down to the child component, getting data that originates in the child component for its own use. We can achieve this type of data flow with the useImperativeHandle Hook, which allows us to expose a value, state, or function inside a child component to the parent component through ref. You can also decide which properties the parent component can access, thereby maintaining the private scoping of the child component.</p>

            <p className="alert alert-info">useImperativeHandle(ref, createHandle, [dependencies])</p>

            <ul>
                <li><code className=" prettyprinted" ><span className="kwd">ref</span></code>: The ref passed down from the parent component</li>
                <li><code className=" prettyprinted" ><span className="pln">createHandle</span></code>: The value to be exposed to the parent component</li>
                <li><code className=" prettyprinted" ><span className="pln">dependencies</span></code>: An array of values that cause the Hook to rerun when changed</li>
            </ul>
        </>
    );
}

export default FunctionalImperativeHandle;