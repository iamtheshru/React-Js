import React, { Component } from 'react'

class StateInClassCompo extends Component {
    // username = "Data Membar";
    constructor(props) {
        super(props);
        this.usernamedm = "Something from DM";
        // console.log("Constructor called");
        this.state = { DataMariMarji: "Test" }
        this.changeStateData = this.changeStateData.bind(this);
        this.datachanging = this.datachanging.bind(this);
    }
    datachanging() {
        console.log("cheking");
        // this.setState({ DataMariMarji: "aa" })
    }
    changeStateData() {
        // this.setState({ DataMariMarji: "Changed" });
        console.log("called");
        console.log(this.setState({ DataMariMarji: "Testing from changeStateData" }));
        // console.log(this.state.DataMariMarji);
    }
    // changeStateData = () => {
    //     // console.log(this.username);
    //     this.setState({ DataMariMarji: "Testing from changeStateData" })
    // }
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
                {/* <button onClick={() => { this.setState({ DataMariMarji: "change" }) }}>{this.state.DataMariMarji}</button> */}
                <button onClick={this.changeStateData}>{this.state.DataMariMarji}</button>
            </>
        )
    }
}

export default StateInClassCompo;
