import React, { Component } from 'react'

class StateInClassCompo extends Component {
    constructor(props) {
        super(props);//Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.usernamedm = "somthing from DM"
        // console.log(this.usernamedm);
        // console.log("constructor called");
        this.state = { DataMariMari: "Test" }
        // this.changeStateData=this.changeStateData.bind(this)
    }
    // databuilding() { let variable = "some variable" }
    // datachanging() { }
    // // var username = "Something"
    // clickHandle() {
    //     // console.log(this.usernamedm);
    //     console.log("checking");
    //     // username = "change"
    // }
    // changeStateData() {
    //     this.setState({ DataMariMarji: "Testing from changeStateData" })
    // }
    changeStateData = () => {
        this.setState({ DataMariMarji: "Testing from changeStateData" })
    }
    render() {
        console.log("From Render", this.usernamedm);
        function clickHandle() {
            console.log(this.usernamedm);
            console.log("checking");
            // username = "change"
        }
        var username = "Something"
        return (
            <>
                <button onClick={this.clickHandle}>Click</button>
                {/* <button onClick={() => { console.log("btn Clicked"); }}>Click</button>
                <button onClick={() => { this.setState({ DataMariMarji: "change" }) }}>123{this.state.DataMariMarji}</button>
                <button onClick={this.changeStateData}>Btn Click Change StateData by Function</button> */}
            </>
        );
    }
}

export default StateInClassCompo;
