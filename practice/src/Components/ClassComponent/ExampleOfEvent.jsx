import React, { Component } from 'react'

class ExampleOfEvent extends Component {
    render() {
        return (
            <>
                <p> react-dom.development.js:86 Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly <br /><br />
                    &lt;button onclick="kaiPanEvent()"&gt;Click onclick="kaiPanEvent()"&lt;/button&gt;
                    {/* <button onclick="kaiPanEvent()">Click onclick="kaiPanEvent()"</button>   */}
                </p>
                <br />
                {/* <button onclick={kaiPanEvent()}>Click onclick=&#123;kaiPanEvent()&#125;</button> */}
                {/* <button onClick={kaiPanEvent}>onclick=&#123;kaiPanEvent&#125; Wrong</button>   */}
                Wrong
                {/* <button onClick={this.kaiPanEvent()}>onClick=&#123;this.function_name()&#125;</button> */}
                <button onClick={this.kaiPanEvent}>onClick=&#123;this.function_name()&#125;</button>
                <br />
                Correct
                <button onClick={this.kaiPanEvent}>onClick=&#123;this.function_name&#125;</button>

            </>
        )
    }
}
export default ExampleOfEvent;
