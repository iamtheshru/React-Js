import React, { Component } from 'react'

class ClassComponentIntro extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <p>class components are more complex than function components.It required  you to extend  from react component and creat a reander function  which return a react element. you can pass data from one class to other class component</p>
                        <br />
                        <pre>
                            class Welcome extends React.Component &#123; <br />
                            &nbsp;&nbsp; render() &#123;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;return &lt;h1&gt;Hello, &#123;this.props.name&#125;&lt;/h1&gt;;<br />
                            &nbsp;&nbsp;&#125;<br />
                            &#125;<br />
                        </pre>
                        <h3>Rendering Components in ReactJS</h3>
                        <p>React is also capable of rendering user-defined components. To render a component in React we can initialize an element with a user-defined component and pass this element as the first parameter to ReactDOM.render() or directly pass the component as the first argument to the ReactDOM.render() method. </p>
                    </div>
                </div>
            </>
        )
    }
}

export default ClassComponentIntro;

