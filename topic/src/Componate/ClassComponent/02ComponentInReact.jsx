import React, { Component } from 'react'

class ComponentInReact extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <p>class components are more complex than function components.It required  you to extend  from react component and creat a reander function  which return a react element. you can pass data from one class to other class component</p>
                        <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components.</p>
                        <p>Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.</p>
                        <h3>Function and Class Components</h3>
                    </div>
                </div>
            </>
        )
    }
}

export default ComponentInReact;
