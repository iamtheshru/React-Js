import React, { Component } from 'react'


const NewComponent = (OriginalComponent) => {
    class EnhancedComponent extends Component {
        clickHnadle = () => {
            console.log("called inside enhanced");
        }
        render() {
            console.log("Enhanced Compo called");
            return (
                <>
                    <OriginalComponent clickHnadle={this.clickHnadle} />
                </>
            )
        }
    }
    return EnhancedComponent
}


export default NewComponent;
