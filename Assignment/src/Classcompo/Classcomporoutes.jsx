import React from "react";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import List from "./01List";
import Classstate from "./02Classstate";
class Classcomporoutes extends Component {
   
    render() { 
        return (
            <Routes>
                <Route path="/" element={<Classcompomenu/>}>
                    <Route path="List" element={<List/>}/>
                    <Route path="Classstate" element={<Classstate/>}/>
                </Route>   
            </Routes>
        );
    }
}
 
export default Classcomporoutes;