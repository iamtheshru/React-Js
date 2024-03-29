import React, { Component } from 'react'
import CompoInheritanceChild from './24CompoInheritanceChild.jsx'

export class CompositionVsInheritance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ParentCompoData: "Something from ParentCompoData"
        }
    }
    
    render() {
        return (
            <>
                <CompoInheritanceChild classProp="bg-dark text-light p-3" message="Message from parent" title={this.state.ParentCompoData}>
                    <h1 className="Dialog-title">Welcome</h1>
                    <p className="Dialog-message"> Thank you for visiting our spacecraft!</p>
                </CompoInheritanceChild>
            </>
        );
    }
}

export default CompositionVsInheritance
