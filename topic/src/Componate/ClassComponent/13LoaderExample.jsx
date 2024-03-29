import React, { Component } from 'react'
import { LoaderEx1, LoaderEx2 } from "./../ClassComponent/14LoaderExample.jsx"

class LoaderExample extends Component {
    constructor(prop) {
        super(prop)
        this.state = { loader: false, loaders: false };
        // this.state = { };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loaders: true });
        }, 2000);
    }
    Change = () => {
        this.setState({ loaders: false })
        // console.log(this.state.loader);
        setTimeout(() => {
            this.setState({ loaders: true }) 
        }, 2000);
        // if (this.state.loaders === true) {
        //     let Displ = document.getElementById("btn");
        //     Displ.style.display = "none"
        // }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return true;
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     setTimeout(() => {
    //         this.setState({ loader: false })
    //     }, 4000)
    // }

    render() {
        return (
            <>
                {(this.state.loader) ? <> <button onClick={() => { this.setState({ loader: !this.state.loader }) }}><LoaderEx1 /></button></> : <> <button onClick={() => { this.setState({ loader: !this.state.loader }) }}> <LoaderEx2 /> </button></>}
                <br /><br />
                <p id="p"></p>
                <button onClick={this.Change} id='btn'>Click</button>
                {this.state.loaders ? <> <p><LoaderEx1 /> </p></> : <><img src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif" alt='' jsaction="VQAsE" className='w-25' /></>}
                <br /><br /><br />
            </>
        )
    }
}

export default LoaderExample;
