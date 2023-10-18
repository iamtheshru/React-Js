import React from "react";
import { Component } from "react";
import Secondcompo from "./Secondcompo";
class StateLifting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "default"
        }
        this.checkbox1 = React.createRef();
        this.checkbox2 = React.createRef();
        this.checkbox3 = React.createRef();
    }
    inputChange = (fromChild) => {
        console.log("called", fromChild);
        this.setState({ data: fromChild })
        let checkbox1 = document.getElementById("p1")
        let checkbox2 = document.getElementById("p2")
        let checkbox3 = document.getElementById("p3")

        this.checkbox1.current.value = checkbox1;
        this.checkbox2.current.value = checkbox2;
        this.checkbox3.current.value = checkbox3;
        console.log(checkbox1);                         


    }
    render() {
        return (<>
            <div className="row p-3">
                <div className="col">
                    <Secondcompo parentMethod={this.inputChange} />
                    <p >in parent compo  :{this.state.data}</p>
                    <p id="p1">in parent compo : </p>
                    <p id="p2">in parent compo :</p>
                    <p id="p3">in parent compo :</p>
                </div>
            </div>
        </>);
    }
}

export default StateLifting;