import { Component } from "react";
class Secondcompo extends Component {
    inputInsideChildCompo = (e) => {
        console.log("called inputInsideChildCompo", e);
        console.log("called inputInsideChildCompo", e.target.value);
        this.props.parentMethod(e.target.value)
        this.props.parentMethod(e.target.value)


    }
    render() {
        return (<>
            <input type="text" onChange={this.inputInsideChildCompo} /><br />
            <label htmlFor="checkbox1">checkbox1</label>
            <input type="checkbox" name="" id="checkbox1" value="true" ref={this.checkbox1} onChange={this.inputInsideChildCompo} /><br />
            <label htmlFor="checkbox2">checkbox2</label>
            <input type="checkbox" name="" id="checkbox2" value="true" ref={this.checkbox2} onChange={this.inputInsideChildCompo} /><br />
            <label htmlFor="checkbox1">checkbox3</label>
            <input type="checkbox" name="" id="checkbox3" value="true" ref={this.checkbox3} onChange={this.inputInsideChildCompo} /><br />
        </>);
    }
}

export default Secondcompo;