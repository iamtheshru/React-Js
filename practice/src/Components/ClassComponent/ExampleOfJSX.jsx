import React, { Component } from 'react'

class ExampleOfJSX extends Component {
    render() {
        let username = "Test"
        let input = `<input type="text" />`
        let inputTag = <input type="text" />
        return (
            <>
                <p>React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.</p>
                <p> Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.</p>
                <p> React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.</p>
                {input}
                <br />
                {inputTag}
                <br />
                user Name:{username}
                <br />
                <input type="text" value={username} name='' id='' />
                <p>5+6={5 + 6}</p>
                <input type="text" />
                <br /><br /> <br /> <br />
            </>
        )
    }
}

export default ExampleOfJSX;
