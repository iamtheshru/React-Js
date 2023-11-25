import React from "react";
import { Outlet, Link } from "react-router-dom";



const FunctionComponentIntro = () => {
    return (
        <>
            <div className="row">
                <div className="col offset-6">
                    <ol>
                        <li>
                            <Link to="functioncompointro">Functional Components Intro</Link>
                            <li> <Link to="functionalcompostate">State in Functional Components</Link> </li>
                            <li> <Link to="functionalcompoprops">Props in Functional Components</Link> </li>
                            <li> <Link to="functionalcomponentuseeffect">Functional  UseEffect</Link> </li>
                            <li> <Link to="functionalcomponentuselayouteffect">Functional  UseLayouteEffect</Link> </li>
                            <li> <Link to="functionalcomponentuseeffectandlayout">Functional  Use Effect&LayouteEffect</Link> </li>
                            <li> <Link to="functionalcomponentmemo">Functional  Memo</Link> </li>
                            <li> <Link to="functionalcomponentcallback">Functional  CallBack</Link> </li>
                            <li> <Link to="functionalcomponentmemoex">Functional  MemoEx</Link> </li>
                            <li> <Link to="functionalcomponentcallbackex">Functional  CallbackEx</Link> </li>
                            <li> <Link to="functionalcomponentreducer">Functional  Reducer</Link> </li>
                            <li> <Link to="functionalcomponentcontext">Functional  Context</Link> </li>
                            <li> <Link to="functionalcomponentuseref">Functional  UseRef</Link> </li>
                            <li> <Link to="functionalimperativehandle">Functional Components UseImparative</Link> </li>
                            <li> <Link to="honycomtask">HoneyComTask</Link> </li>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
};

export default FunctionComponentIntro;