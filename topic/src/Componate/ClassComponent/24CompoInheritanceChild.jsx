import React, { Component } from 'react'

class CompoInheritanceChild extends Component {
    render() {
        return (
            <>
                <div className={this.props.classProp}>
                    <h1 className="Dialog-title">
                        {this.props.title}
                    </h1>
                    <p className="Dialog-message">
                        {this.props.message}
                    </p>
                    {this.props.children}
                </div>
            </>
        )
    }
}

export default CompoInheritanceChild
