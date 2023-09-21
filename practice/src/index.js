import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import HeaderCompo from './Components/HeaderFile';
import MainRouter from './Router/MainRouter';
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<HeaderCompo/>);
root.render(<RouterProvider router={MainRouter} />);
// root.render(

//     <>
//         <h1>Title</h1>
//         <h2>Error</h2>
//     </>
//     // <div>
//     //     <h1>Title</h1>
//     //     <h2>Error</h2>
//     // </div>

// //     Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
//     // Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
// );