import { useRef } from "react";
import Modal from "./Modal.jsx";


const UseImparativeHandleEx2 = () => {
    const modalRef = useRef();
    const handleOpenModel = () => {
        modalRef.current.openModal();
    }
    console.log('parent rendered');
    return (<>
        <p>Parent component</p>
        <Modal ref={modalRef} />
        <button onClick={handleOpenModel}>Open</button>
    </>);
}

export default UseImparativeHandleEx2;