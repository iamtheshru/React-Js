import React from "react";
import { Component } from "react";
import Secondcompo from "./Secndcompo";
class StateLifting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "default"
        }
    }
    inputChange = (fromChild) => {
        console.log("called", fromChild);
        this.setState({ data: fromChild })
    }
    render() {
        return (<>
            <div className="row p-3">
                <div className="col">
                    <Secondcompo parentMethod={this.inputChange} />
                    <p >in parent compo  :{this.state.data}</p>
                </div>
            </div>
        </>);
    }
}

export default StateLifting;