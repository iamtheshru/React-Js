import React, { Component } from 'react'

class ControlledCompo extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", formData: {} }
    }
    inpHandleChange = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        this.setState({ username: e.target.value })
    }
    //inHandleChange=(e)=>console.log("called")
    render() {
        return (
            <>
                {JSON.stringify(this.state)}

                <div className="row my-3">
                    <div className="col-4">
                        <input type="text" className='form-control' placeholder='print Inside Console' name='usernamechangelog' onChange={(e) => { console.log('called'); }} id='username' />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-4">
                        <input type="text" className='form-control' placeholder='User Name handle by Event Handler arrow' name='usernamechangelog' onChange={this.inpHandleChange} id='username' />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-4">
                        <input type="text" className='form-control' placeholder='Enter direct arrow func set state' name='usernamechangelog' onChange={(e) => { this.setState({ username: e.target.value }) }} id='username' />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-4">
                        <input type="text" className='form-control' placeholder='usernamechangelog' name='usernamechangelog' onChange={(e) => { this.setState((prevValue) => ({ formData: { ...prevValue.formData, [e.target.name]: e.target.value } })) }} id='username' />
                        <br />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-4">
                        <input type="text" className='form-control' placeholder='Enter Mobile' name='Mobile' onChange={(e) => { this.setState((prevValue) => ({ formData: { ...prevValue.formData, [e.target.name]: e.target.value } })) }} id='username' />
                        <br />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-4">
                        <input type="text" className='form-control' placeholder='Enter Email' name='email' onChange={(e) => { this.setState((prevValue) => ({ formData: { ...prevValue.formData, [e.target.name]: e.target.value } })) }} id='username' />
                        <br />
                    </div>
                </div>
            </>
        )
    }
}
export default ControlledCompo;
