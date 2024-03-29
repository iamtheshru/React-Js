import { useRef } from "react";

const RefTutorial = () => {
    const inputRef = useRef(null);
    const onclick = () => {
        inputRef.current.value = "";

    };
    return (
        <>
            <h1>Pedro</h1>
            <input type="text" placeholder="Ex..." ref={inputRef} />
            <button onClick={onclick}>Change Name</button>
            <p></p>
        </>
    );
}

export default RefTutorial;