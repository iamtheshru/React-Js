import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Header from "./Componate/Header"
import MainRouter from './Componate/MainRouter';
import { RouterProvider } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  (<RouterProvider router={MainRouter} />)
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
