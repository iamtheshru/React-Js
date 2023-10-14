import React, { Component } from 'react'
import './table.css'

class Uncontrolledcompo extends Component {
    constructor(props) {
        super(props);
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.contact = React.createRef();
    }
    submitdata = (e) => {
        e.preventDefault();
        const result = document.getElementById("result");
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td1Class = td1.classList.add("table1");
        td1.append(td1Class);
        const td2 = document.createElement("td");
        const td2Class = td2.classList.add("table2");
        td2.append(td2Class);
        const td3 = document.createElement("td");
        const td3Class = td3.classList.add("table3");
        td3.append(td3Class);
        const td4 = document.createElement("td");
        const td4Class = td4.classList.add("table4");
        td4.append(td4Class);
        const td5 = document.createElement("td");
        const td5Class = td5.classList.add("table5");
        td5.append(td5Class);
        const fname = this.firstName.current.value;
        const lName = this.lastName.current.value;
        const email = this.email.current.value;
        const password = this.password.current.value;
        const contact = this.contact.current.value;
        td1.textContent = fname;
        td2.textContent = lName;
        td3.textContent = email;
        td4.textContent = password;
        td5.textContent = contact;
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        result.append(tr);
        this.firstName.current.value = "";
        this.lastName.current.value = "";
        this.email.current.value = "";
        this.password.current.value = "";
        this.contact.current.value = "";




        // console.log("called");
        // console.log(this.username);
        // console.log(this.username.current.value);
    }

    render() {
        return (
            <>
                <h3>Uncontrolled Component</h3>
                <div className="row">
                    <div className="col-6">
                        <form onSubmit={this.submitdata} method="post">
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" ref={this.firstName} id="" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" ref={this.lastName} id="" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Id</label>
                                <input type="email" className="form-control" ref={this.email} id="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" ref={this.password} id="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contact" className="form-label">Mobile</label>
                                <input type="text" className="form-control" ref={this.contact} id="" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <div>
                            <table id="result">
                                <thead>
                                    <tr>
                                        <th className=""> Table</th>
                                    </tr>
                                    <tr>
                                        <th className="pt">First Name</th>
                                        <th className="pt">Last Name</th>
                                        <th className="pt">Email Id</th>
                                        <th className="pt">Password</th>
                                        <th>Contact</th>
                                        <br />
                                        <br />
                                        <br />
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>

            </>);
    }
}

export default Uncontrolledcompo;
