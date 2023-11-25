import React, { useMemo, useCallback } from "react"

const UseCallbackEx2 = () => {
    const values = [3, 9, 6, 4, 2, 1]

    // This will always return the same value, a sorted array. Once the values array changes then this will recompute.
    const memoizedValue = useMemo(() => values.sort(), [values])

    // This will give me back a function that can be called later on. It will always return the same result unless the values array is modified.
    const memoizedFunction = useCallback(() => values.sort(), [values])

    return (<>
        <h1>UseCallback Ex2</h1>
        <p>{memoizedValue}</p>
        <button onClick={() => console.log(memoizedFunction)}>Click me!</button>
    </>);
}

export default UseCallbackEx2;



