import React, { Component } from 'react'

class PropsChildInClassCompo extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <img src={this.props.images} className="card-img-top" alt="Fissure in Sandstone" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.Tital}</h5>
                        <p className="card-text">{this.props.Text}</p>
                        <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                </div>
            </>
        )
    }
}
export default PropsChildInClassCompo;
