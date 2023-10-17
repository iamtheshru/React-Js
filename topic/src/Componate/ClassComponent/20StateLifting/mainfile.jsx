import React, { Component } from 'react';
import SecondCompo from './SecondCompo.jsx'

export class mainfile extends Component {
    constructor(props) {
        super(props);
        this.state = { data: "default" }
    }
    handleInputChange = (fromchild) => {
        console.log("called", fromchild);
        this.setState({ data: fromchild })
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <SecondCompo ParantMethod={this.handleInputChange} />
                        <p>in parent compo:{this.state.data}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default mainfile
