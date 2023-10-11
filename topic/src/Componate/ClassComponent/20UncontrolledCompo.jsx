import React, { Component } from 'react'

class UncontrolledCompo extends Component {
    constructor(props) {
        super(props);
        this.username = React.createRef()
    }
    submitdata = (e) => {
        e.preventDefault();
        console.log(this.username);
        console.log(this);
    }
    render() {
        return (
            <>
                <div>
                    <h3>Uncontrolled Component</h3>
                    <p>ref</p>
                    <form onSubmit={this.submitdata} method='post'>
                        <input type="text" name="name" id='name' ref={this.username} />
                        <button type='submit' name='btn' id='btn'>SUBMIT</button>
                    </form>
                </div>
            </>
        )
    }
}
export default UncontrolledCompo;
