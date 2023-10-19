import React, { Component } from 'react'

class ControlledCompoEx extends Component {
    constructor(props) {
        super(props);
        this.state = { loanAmount: 0, emi: 0, loanYear: 0, monthly: 0, totalInterest: 0, totalAmount: 0 }
    }
    calculateResults = () => {
        const { loanAmount, emi, loanYear } = this.state
        const userAmount = Number(loanAmount);
        const calculatedInterest = Number(emi) / 100 / 12;
        const calculatedPayments = Number(loanYear) * 12;
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (userAmount * x * calculatedInterest) / (x - 1);
        const total = monthly * calculatedPayments;
        const totalInterest = total - userAmount;
        const totalAmount = userAmount + totalInterest
        this.setState({ monthly });
        this.setState({ totalInterest });
        this.setState({ totalAmount })
    }

    render() {


        return (
            <>
                {JSON.stringify(this.state)}
                <form action="" method='post'>
                    <div className="col-4">
                        <label>Loan Amount</label>
                        <input type="text" className='form-control' placeholder='Loan Amount' name='usernamechangelog' onChange={(e) => { this.setState({ loanAmount: e.target.value }, this.calculateResults) }} id='username' />
                    </div>
                    <br />
                    <div className="col-4">
                        <label>Rate of interest</label>
                        <input type="text" className='form-control' placeholder='Rate of interest (p.a)' name='username' onChange={(e) => { this.setState({ emi: e.target.value }, this.calculateResults) }} id='username' />
                    </div>
                    <br />
                    <div className="col-4">
                        <label>Loan tenure </label>
                        <input type="text" className='form-control' placeholder='Loan tenure' name='username' onChange={(e) => { this.setState({ loanYear: e.target.value }, this.calculateResults) }} id='username' />
                    </div>
                    <br />
                    <br />
                </form>
                <div>
                    <p> EMi : {this.state.monthly}</p>
                    <p>Total Interest : {this.state.totalInterest}</p>
                    <p>Total Amount : {this.state.totalAmount}</p>
                </div>
            </>
        )
    }
}
export default ControlledCompoEx;
