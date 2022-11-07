import React, { Component } from "react"
import Anonymous from "./AnonymousUser";

export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        // Este enlace es necesario para hacer que `this` funcione en el callback
        //this.handleClick = this.handleClick.bind(this);
    }


    // Esto es experimental segun version de React
    handleClick = () => {
        console.log('this is:', this);
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }


    // Metodo para manejo de el click..
    /*handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }*/

    render() {
        return (
            <>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            <Anonymous isRegistered={this.state.isToggleOn}></Anonymous>
            </>
        );
    }
}