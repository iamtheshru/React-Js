import React, { Component } from 'react'

class jsx extends Component {
    render() {
        let Input = <input type="text" />;
        let INputTag = `<input type="text" />`;
        var username = "Shraddha";
        return (
            <>
                {Input};
                <br />
                {INputTag}
                <br />
                UserDetails:{username}
                {/* <input type="text" /> */}
            </>
        )
    }
}
export default jsx;