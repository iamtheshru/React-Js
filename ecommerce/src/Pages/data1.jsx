// Example usage in another component
import React, { Component } from 'react';
import ControlledCompoEx from './ControlledCompoEx'; // Adjust the import path based on your project structure

class ParentComponent extends Component {
    render() {
        // Pass a valid 'id' prop to ControlledCompoEx
        const productId = 123; // Replace with the actual product ID
        return <ControlledCompoEx id={productId} />;
    }
}

export default ParentComponent;
