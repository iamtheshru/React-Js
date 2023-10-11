import React, { Component, Suspense } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogin: true }
    }
    render() {
        return (
            <>
                {/* {(this.state.isLogin) ? <> <button onClick={() => { this.setState({ isLogin: !this.state.isLogin }) }}>Logout</button></> : <> <button onClick={() => { this.setState({ isLogin: !this.state.isLogin }) }}>Login</button></>} */}
                <> <button onClick={() => { this.setState({ isLogin: !this.state.isLogin }) }}>{(this.state.isLogin) ? "Login" : "Logout"}</button></>
            </>
        )
    }
}

export default ConditionalRendering;
