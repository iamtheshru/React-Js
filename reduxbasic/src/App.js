import { Provider } from "react-redux";
import store from './store.js'
import Cart from './Cart.js'
import "./App.css";


const App = () => {
    return (<>
        <Provider store={store}>
            <Cart />
        </Provider>
    </>);
}

export default App;