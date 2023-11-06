import React from "react";
import { Component } from "react";
class Classstate extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    reset = () => {
        this.setState({
            count: 0
        })
    }
    render() {
        return (<>

            <div className="d-flex align-items-center justify-content-center">
                <div className="bg-primary">
                    <h3 className="text-light text-center">React Web</h3>
                    <h2 className="text-center">{this.state.count}</h2>
                    <button onClick={this.increment}>Increment</button>
                    <button className="" onClick={this.decrement}>Decrement</button>
                    <button className="d-block mt-2 mx-5" onClick={this.reset}>Reset</button>

                </div>
            </div>
        </>);
    }
}

export default Classstate;