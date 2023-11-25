import { memo } from "react";

const UseCallbackChildEx2 = ({ item, onToggle }) => {
    return (<>
        <li>
            <input type="checkBox" checked={item.checked} onChange={() => onToggle(item.id)} />
            {item.name}
        </li>
    </>);
}

export default memo(UseCallbackChildEx2);