import React, { Component } from 'react'

class ExampleOfJsx extends Component {
    render() {
        let UserName = "something"
        let input = `<input type="text" />`;
        let inputTag = <input type="text" />
        return (
            <>
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