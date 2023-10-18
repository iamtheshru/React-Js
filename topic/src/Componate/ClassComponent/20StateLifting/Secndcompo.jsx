import { Component } from "react";
class Secondcompo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: "true"
        }
    }
    inputInsideChildCompo = (e) => {
        console.log("called inputInsideChildCompo", e);
        console.log("called inputInsideChildCompo", e.target.value);
        this.props.parentMethod(e.target.value)
        this.setState({ checked: !this.state.checked })
        this.props.parentMethod(e.target.checked)

    }
    render() {
        return (<>
            <input type="text" onChange={this.inputInsideChildCompo} /><br />
            <label htmlFor="checkbox1">checkbox1 :{this.state.checked}</label>
            <input type="checkbox" name="" id="checkbox1" onChange={this.inputInsideChildCompo} /><br />
            <label htmlFor="checkbox2">checkbox2:{this.state.checked}</label>
            <input type="checkbox" name="" id="checkbox2" onChange={this.inputInsideChildCompo} /><br />
            <label htmlFor="checkbox1">checkbox3:{this.state.checked}</label>
            <input type="checkbox" name="" id="checkbox3" onChange={this.inputInsideChildCompo} /><br />

        </>);
    }
}

export default Secondcompo;