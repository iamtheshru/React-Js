import { Component } from "react";
class Secondcompo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: null,
        }
    }
    inputInsideChildCompo = (e) => {
        console.log("called inputInsideChildCompo", e);
        console.log("called inputInsideChildCompo", e.target.value);
        // this.props.parentMethod(e.target.value)
        const value = e.target.value; // get the checkbox value
        if (this.state.checked === value) {
            this.setState({ checked: null })
        }
        else {
            this.setState({ checked: value })
        }
        this.props.parentMethod(value); // pass the data to the parent component

    }
    render() {
        return (<>
            <input type="text" onChange={this.inputInsideChildCompo} /> <br />
            <label htmlFor="checkbox1">checkbox1</label>
            <input type="checkbox" name="" id="checkbox1" value="cricket" checked={this.state.checked === "cricket"} onChange={this.inputInsideChildCompo} /> {this.state.checked === "cricket" ? "cricket" : ""}<br />
            <label htmlFor="checkbox2">checkbox2</label>
            <input type="checkbox" name="" id="checkbox2" value="football" checked={this.state.checked === "football"} onChange={this.inputInsideChildCompo} />{this.state.checked === "football" ? "football" : ""}<br />
            <label htmlFor="checkbox1">checkbox3</label>
            <input type="checkbox" name="" id="checkbox3" value="vollyball" checked={this.state.checked === "vollyball"} onChange={this.inputInsideChildCompo} />{this.state.checked === "vollyball" ? "vollyball" : ""}<br />
        </>);
    }
}


export default Secondcompo;