import React from "react";
import { Route, Routes } from "react-router-dom";
import Functioncompomenu from "./Functioncompomenu";
import Functionstate from "./01Functionstate";
const Functioncomporoutes = () => {
    return (<>
        <Routes>
            <Route path="/" element={<Functioncompomenu />}>
                <Route path="Functionstate" element={<Functionstate />} />
            </Route>
        </Routes>
    </>);
}

export default Functioncomporoutes;