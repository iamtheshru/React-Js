import { useState } from "react";

const UseSateEx4 = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <>
            <input type={isPasswordVisible ? "text" : "password"} />
            <button onClick={() => { setIsPasswordVisible((previousState) => !previousState) }}>{isPasswordVisible ? "Hide" : "Show"}</button>
        </>
    );
}

export default UseSateEx4;