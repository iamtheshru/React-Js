import React, { Component } from 'react'

class Event extends Component {
    render() {
        return (
            <>
                {/* js */}
                {/* <button onClick="this.Kaipan()">Click</button> */}
                {/* wrong
                <button onClick={this.kaipan()}>Click</button> */}
                correct
                <button onClick={this.kaipan}>Click</button>
            </>
        )
    }
}

export default Event;
