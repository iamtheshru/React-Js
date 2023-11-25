import React from "react";
import { Outlet, Link } from "react-router-dom";



const FunctionComponentIntro = () => {
    return (
        <>
            <div className="row">
                <div className="col offset-6">
                    <ol>
                        <li><Link to="usesateex1">useSateEx-1</Link></li>
                        <li><Link to="usesateex2">useSateEx-2</Link></li>
                        <li><Link to="usesateex3">useSateEx-3</Link></li>
                        <li><Link to="usesateex4">useSateEx-4</Link></li>
                        <li><Link to="usesateex5">useSateEx-5</Link></li>
                        <li><Link to="useeffectex1">useEffectEx-1</Link></li>
                        <li><Link to="useeffectex2">useEffectEx-2</Link></li>
                        <li><Link to="useeffectex3">useEffectEx-3</Link></li>
                        <li><Link to="useeffectex4">useEffectEx-4</Link></li>
                        <li><Link to="useeffectEx5">useEffectEx-5</Link></li>
                        <li><Link to="uselayouteffectex1">UseLayoutEffectEx-1</Link></li>
                        <li><Link to="uselayouteffectex2">UseLayoutEffectEx-2</Link></li>
                        <li><Link to="usememoex1">UseMemoEx-1</Link></li>
                        <li><Link to="usememoex2">UseMemoEx-2</Link></li>
                        <li><Link to="usememoex2">UseMemoEx-3</Link></li>
                        <li><Link to="usecallbackex1">UseCallbackEx-1</Link></li>
                        <li><Link to="usecallbackex2">UseCallbackEx-2</Link></li>
                        <li><Link to="usecallbackex3">UseCallbackEx-3</Link></li>
                        <li><Link to="usecallbackex4">UseCallbackEx-4</Link></li>
                        <li><Link to="usecallbackex5">UseCallbackEx-5</Link></li>
                        <li><Link to="usecontextex1">UserContextEx-1</Link></li>
                        <li><Link to="usecontextex2">UserContextEx-2</Link></li>
                        <li><Link to="userefex1">UseRefEx-1</Link></li>
                        <li><Link to="userefex2">UseRefEx-2</Link></li>
                        <li><Link to="Useimparativehandleex1">UseImparativeHandleEx-1</Link></li>
                        <li><Link to="Useimparativehandleex2">UseImparativeHandleEx-2</Link></li>
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