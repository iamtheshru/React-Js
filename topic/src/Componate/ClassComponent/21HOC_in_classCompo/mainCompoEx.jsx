import React, { Component } from 'react'
import EnhancedCompoEX from './EnhancedCompoEX.jsx';

class mainCompoEx extends Component {
    render() {
        const { clickHnadle } = this.props
        return (
            <>
                < div>
                    <button id='btn' onClick={clickHnadle}>Click</button>
                    <div id='div' onClick={clickHnadle}></div>
                </div>
            </>
        )
    }
}

export default EnhancedCompoEX(mainCompoEx);
