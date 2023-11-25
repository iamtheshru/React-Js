import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react"

const ChildComponent = forwardRef((props, ref) => {
    const [ele, setEle] = useState({});
    const [ele2, setEle2] = useState({});
    const [NewArray, setNewArray] = useState({});
    const arr = [1, 2, 3, 4, 5, 6];

    useImperativeHandle(ref, () => ({
        getAlert() {
            console.log("called");
            let suffRes = shuffle(arr);
            setEle(suffRes[0]);
        },
    }));

    useEffect(() => {
        let suffRes = shuffle(arr);
        setEle(suffRes[0]);
        setEle2(suffRes[1]);
        suffRes.shift(); // for first element
        suffRes.shift(); // for second element
        props.onAddHandler(suffRes);

    }, [NewArray, ele])
    const shuffle = (array) => {
        for (let index = array.length - 1; index > 0; index--) {
            // console.log(Math.random());
            // console.log(Math.random() * index + 1);
            // console.log(Math.floor(Math.random() * index + 1))
            const j = Math.floor(Math.random() * (index + 1));
            // console.log("j",j);
            const temp = array[index];
            array[index] = array[j];
            array[j] = temp;
        }
        return array;
    }
    return (<>
        ChildComponent
        All the Values of Array = {(arr)}
        <p>Remaining Array Element = {JSON.stringify(ele)},{JSON.stringify(ele2)}</p>
    </>)
})

export default ChildComponent;