import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Mainrouter from './Router/Mainrouter.jsx';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux';
import CustomStore from '../src/Store/CustomStore.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={CustomStore}>
  <RouterProvider router={Mainrouter} />
</Provider>

);
