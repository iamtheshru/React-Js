import React, { Component } from 'react'

export class SecondCompo extends Component {
    inputInsideChildCompo = (e) => {
        // console.log("called inputInsideChildCompo",e);
        // console.log("called inputInsideChildCompo",e.target);
        console.log("called inputInsideChildCompo", e.target.value);
        this.props.ParantMethod(e.target.value)
    }

    render() {
        return (
            <>
                <input type="text" onChange={this.inputInsideChildCompo} name='' id='' />
            </>
        )
    }
}

export default SecondCompo
