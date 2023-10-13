import React, { Component } from 'react'

class UncontrolledCompoEx extends Component {
    constructor(props) {
        super(props);
        this.fristname = React.createRef();
        this.lastname = React.createRef();
        this.password = React.createRef();
        this.contact = React.createRef();
        this.email = React.createRef();
    }
    inputHendal = () => {
        let table = document.getElementById('result');
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let tabletd1 = td1.classList.add('td1')
        let tabletd2 = td2.classList.add('td2')
        let tabletd3 = td3.classList.add('td3')
        let tabletd4 = td4.classList.add('td4')
        let tabletd5 = td5.classList.add('td5')
        td1.append.tabletd1
        td2.append.tabletd2
        td3.append.tabletd3
        td4.append.tabletd4
        td5.append.tabletd5
        td1.textContent = this.fristname.current.value;
        td2.textContent = this.lastname.current.value;
        td3.textContent = this.password.current.value;
        td4.textContent = this.contact.current.value;
        td5.textContent = this.email.current.value;
        td1.textContent = fname;
        td2.textContent = lName;
        td3.textContent = email;
        td4.textContent = password;
        td5.textContent = contact;
        tr.append.td1
        tr.append.td2
        tr.append.td3
        tr.append.td4
        tr.append.td5
        table.append.tr
    }
    render() {
        return (
            <>
                <div>
                    <form method='post' onSubmit={this.inputHendal}>
                        <div className="mb-3 col-6">
                            <label for="exampleFormControlInput1" className="form-label">Frist Name</label>
                            <input type="text" className="form-control" ref={this.fristname} id="exampleFormControlInput1" placeholder="Frist Name" />
                        </div>
                        <div className="mb-3 col-6">
                            <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                            <input type="text" className="form-control" ref={this.lastname} id="exampleFormControlInput1" placeholder="Last Name" />
                        </div>
                        <div className="mb-3 col-6">
                            <label for="exampleFormControlInput1" className="form-label">Contact</label>
                            <input type='tel' className="form-control" ref={this.contact} id="exampleFormControlInput1" placeholder="+91" />
                        </div>
                        <div className="mb-3 col-6">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" ref={this.email} id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3 col-6">
                            <label for="exampleFormControlInput1" className="form-label">Password</label>
                            <input type='password' className="form-control" ref={this.password} id="exampleFormControlInput1" placeholder="Password" />
                        </div>
                        <div className="mb-3 col-6">
                            {/* <label for="exampleFormControlInput1" className="form-label">Password</label> */}
                            <input type='submit' value='submit' className="form-control" id="exampleFormControlInput1" placeholder="Password" />
                        </div>
                    </form>
                    <table id='result'>
                        <tr>
                            <td>Table</td>
                        </tr>
                    </table>
                </div>
            </>
        )
    }
}
export default UncontrolledCompoEx;
