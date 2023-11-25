import { createContext } from "react";
import Book from './Book.jsx'

const CurrecyContext = createContext(null);
const Data = [
    {
        id: '1',
        title: 'The Road to React',
        Price: 3.99,
    },
    {
        id: '2',
        title: 'The Road to GraphQL',
        price: 29.99,
    }
]

const UserContextEx2 = () => {
    return (<>
        <CurrecyContext.Provider value='€'>
            <Book list={Data} />
        </CurrecyContext.Provider>
    </>);
}

export default UserContextEx2;
export { CurrecyContext };