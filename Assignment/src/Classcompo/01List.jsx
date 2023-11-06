import React, { Component } from "react";
class List extends Component {
    render() {
        const items= ["Use Array .map","Not a for loop","Give each iten a unique key","Avoid using array index as the key"];
        const ListItems = items.map((item)=><li className="border p-3 bg-light">{item}</li>);
        return (
        <>
            <div className="bg-success">
                <h2>The React Way to render a list</h2> 
                <ul>
                    {ListItems}
                </ul>
            </div>
        </>
        );
    }
}
                
export default List;