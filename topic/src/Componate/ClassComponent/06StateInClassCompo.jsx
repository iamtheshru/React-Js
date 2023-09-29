import React, { Component } from 'react'

class StateInClassCompo extends Component {
    username = "Data Membar";
    constructor(props) {
        super(props);
        this.usernamedm = "Something from DM";
        // console.log("Constructor called");
        this.state = { DataMariMarji: "Test" }
    }
    datachanging() {
        console.log("cheking");
    }
    changeStateData = () => {
        // console.log(this.username);
        this.setState({ DataMariMarji: "Testing from changeStateData" })
    }
    render() {
        // var username = "Data Membar";    
        // function changeStateData() {
        //     // console.log(this.username);
        //     // console.log("cheking");
        // }
        // console.log("from Render", this.username);
        return (
            <>
                <p>State is a React JS variable. It is mutable it means when we want to change the data into runtime then we use state.
                </p>
                {/* <button onClick={this.username}>Click</button> */}
                <button onClick={this.datachanging}>Click</button>
                <button onClick={() => { console.log("btn Clicked"); }}>Click</button>
                <button onClick={() => { this.setState({ DataMariMarji: "change" }) }}>{this.state.DataMariMarji}</button>
                <button onClick={this.changeStateData}>Btn Click Change StateData by Function</button>
            </>
        )
    }
}

export default StateInClassCompo;
