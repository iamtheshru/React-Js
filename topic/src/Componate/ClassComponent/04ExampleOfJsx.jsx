import React, { Component } from 'react'

class ExampleOfJsx extends Component {
    render() {
        let UserName = "something"
        let input = `<input type="text" />`;
        let inputTag = <input type="text" />
        return (
            <>
                <p>JSX stands for JavaScript XML</p>
                <p>JSX allows us to write your html within JavaScript in very easy manner.</p>
                <p>JSX is an extension of JavaScript that allows you to write HTML in JavaScript file.</p>
                <p>JSX syntax is not understand by browser and so we need transpiler like babel to convert the code from JSX to JavaScript.</p>
                <p>Example of JSX:When we want to print something in JSX we use &#123; &#125;{ }</p>
                <p>In above Example we pass value in input tag because of Virtual dom we can't be able to edit or delete input tag value.</p>
                <br />
                {input} //backTick
                <br />
                <br />
                {inputTag} //input print
                <br />
                <br />
                UserName:{UserName} //value
                <br />
                <br />
                <input type="text" /> // Normal Input
                <br />
                <br />
                <input type="text" value={UserName} name='' id='' /> //input na andar value print
            </>
        )
    }
}
export default ExampleOfJsx;