import { useImperativeHandle, useRef } from "react";
import React from "react";
const CustomModel = ({ open, onClose }, ref) => {
    const closeRef = useRef();
    const confirmRef = useRef();
    const denyRef = useRef();
    useImperativeHandle(ref, () => {
        return {
            closeBtn: closeRef.current,
            confirmBtn: confirmRef.current,
            denyBtn: denyRef.current,
        }
    })
    if (!open) return null
    return (<>
        <div>
            <button ref={closeRef} onClick={onClose}>&times;</button>
            <h1>title</h1>
            <div>
                <button ref={confirmRef}>Confirm</button>
                <button ref={denyRef}>Deny</button>
            </div>
        </div>
    </>);
}

export default React.forwardRef(CustomModel);