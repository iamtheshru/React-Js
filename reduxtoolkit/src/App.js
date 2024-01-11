import './App.css';
import { Provider } from "react-redux";
import store from './store.js'
import Cart from './cart.js'

function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}

export default App;
