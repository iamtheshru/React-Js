import './App.css';
import { Provider } from "react-redux";
import store from './store.js'

function App() {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default App;
