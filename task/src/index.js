import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import MainRouter from './Router/MainRouter.jsx';
import { RouterProvider } from "react-router-dom";
// import "../public/assets/css/headerstyle.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={MainRouter} />);