import { useRef, useState } from "react";
import CustomModel from "./CustomModel";

const Useimparativehandleex1 = () => {
    const [open, setOpen] = useState(false);
    const modalRef = useRef()
    const handleclose = () => {
        modalRef.current.closeBtn.focus();
        console.log("close button focus");
        <h2>close button focus</h2>
    }
    return (<>
        <button onClick={() => setOpen(true)}>Open</button>
        <button onClick={handleclose}>
            Focus Close Btn
        </button>
        <button onClick={() => modalRef.current.confirmBtn.focus()}>
            Focus Confirm Btn
        </button>
        <button onClick={() => modalRef.current.denyBtn.focus()}>
            Focus Deny Btn
        </button>
        <CustomModel ref={modalRef} open={open} onClose={() => setOpen(false)}></CustomModel>

    </>);
}

export default Useimparativehandleex1;