import { useLayoutEffect, useRef } from "react";

const UseLayoutEffectEx2 = () => {
    const elementRef = useRef(null);

    useLayoutEffect(() => {
        const element = elementRef.current;
        // Animate the element's opacity on mount
        element.style.color = "red";

        setTimeout(() => {
            element.style.color = "green";
        }, 1000);
        return () => {
            // Clean up animation when component unmounts
            clearTimeout(
                // element.style.opacity = 'blue',
                console.log('blue')
            );
        };
    });

    return (
        <div ref={elementRef}>Hello world</div>
    )
};
export default UseLayoutEffectEx2;