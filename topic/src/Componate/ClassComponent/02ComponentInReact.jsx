import React, { Component } from 'react'

class ComponentInReact extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components.</p>
                        <p>Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.</p>
                    </div>
                </div>
            </>
        )
    }
}

export default ComponentInReact;
