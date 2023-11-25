import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useState } from "react"

const Modal = (props, ref) => {
    const [modalState, setModalSate] = useState(false);

    useImperativeHandle(ref, () => ({
        openModal: () => setModalSate(true)
    }));

    console.log("child rendered");
    if (!modalState) return null;

    return (<>
        <div>
            <p>This is My Modal!</p>
            <button onClick={() => setModalSate(false)}>Close</button>
        </div>

    </>)
}
export default forwardRef(Modal);