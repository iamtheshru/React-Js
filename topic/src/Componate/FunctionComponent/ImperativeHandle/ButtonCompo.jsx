import { forwardRef, useImperativeHandle, useState } from "react";

const ButtonCompo = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);
    useImperativeHandle(ref, () => {
        alertToggle(){
            console.log("called inside child compo btn");
            setToggle(!toggle)
        }
    })
});
return (
    <>
        <p>Props:{props.data}</p>
        <p>this will contains child data : {toggle && <span>Toggle</span>} </p>
        {/* <button onClick={()=>{
                console.log("anything");
            }}>Button From Child</button> */}
    </>
)

export default ButtonCompo