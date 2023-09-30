import { useRoutes } from "react-router-dom"
import ClassCompoMenu from '../Componanet/ClassComponent/01ClassCompoMenu.jsx';
import ClassCompoItro from '../Componanet/ClassComponent/02ClassCompoItro.jsx';
import Jsx from '../Componanet/ClassComponent/03jsx.jsx';
import Event from '../Componanet/ClassComponent/04Event.jsx';

const ClassComponanetRouter = () => {
    const router = useRoutes([
        {
            path: "/",
            element: <ClassCompoMenu />,
            children: [
                {
                    path: "classcompointro",
                    element: <ClassCompoItro />
                },
                {
                    path: "jsx",
                    element: <Jsx />
                },
                {
                    path: "event",
                    element: < Event />
                }
            ]
        }
    ])
    return router
}
export default ClassComponanetRouter;
