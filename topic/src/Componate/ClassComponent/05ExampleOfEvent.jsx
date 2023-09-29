import React, { Component } from 'react'

class ExampleOfEvent extends Component {
    render() {
        return (
            <>
                <p> react-dom.development.js:86 Warning: You provided a `value` prop to a form field without an `onChange` handler.
                    This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly
                    <br /><br />
                    JavaScript Event : &lt;button onclick="kaiPanEvent()"&gt;Click onclick="kaiPanEvent()"&lt;/button&gt;
                </p>
                {/* <button onclick="kaiPanEvent()">Click onclick="kaiPanEvent()"</button>   */}
                {/* <button onclick={kaiPanEvent()}>Click onclick=&#123;kaiPanEvent()&#125;</button> */}
                {/* <button onClick={kaiPanEvent}>onclick=&#123;kaiPanEvent&#125; Wrong</button>   */}
                <p>Wrong: &lt;button onClick=&#123;this.kaiPanEvent()&#125;this.function_name()&#125;&lt;/button&gt;</p>
                {/* Wrong
                <button onClick={this.kaiPanEvent()}>onClick=&#123;this.function_name()&#125;</button> */}
                <p>Correct: &lt;button onClick=&#123;this.kaiPanEvent&#125;this.function_name&#125;&lt;/button&gt;</p>
                <button onClick={this.kaiPanEvent}>onClick=&#123;this.function_name&#125;</button>
                <br />
                <br />

            </>
        )
    }
}

export default ExampleOfEvent;
