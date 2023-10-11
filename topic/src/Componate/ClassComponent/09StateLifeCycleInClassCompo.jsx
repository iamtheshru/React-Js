import React, { Component } from 'react';

class StateLifeCycleInClassCompo extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = { something: 1 }
    }

    // componentWillMount() {
    //     console.log("componentWillMount");
    // }

    componentDidMount() {
        console.log("componentDidMount");
    }

    // componentWillReceiveProps(nextProps) {

    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        // return false
        return true
    }

    // componentWillUpdate(nextProps, nextState) {

    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    clickHandle = () => {
        this.setState({ something: this.state.something + 1 })
    }
    render() {
        // console.log("render");
        return (
            <div>
                StateLifeCycleInClassCompo
                <button onClick={this.clickHandle}>Click {this.state.something}</button>
            </div>
        );
    }
}



export default StateLifeCycleInClassCompo;