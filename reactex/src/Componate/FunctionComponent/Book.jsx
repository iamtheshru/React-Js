import { useContext } from 'react';
import { CurrecyContext } from './UserContextEx2'

const Book = ({ item }) => {
    const currency = useContext(CurrecyContext);
    return (<>
        <li>
            {item.title} - {item.price} {currency}
        </li>
    </>);
}
const Books = ({ list }) => {
    return (<>
        <ul>
            {list.map((item) => (
                <Book key={item.id} item={item} />
            ))}
        </ul>
    </>)
};

export default Books;