import React, { Component } from 'react';

class Saludo extends React.Component{
    render(){
        const nombre = this.props.name;
        return(
            <h1>Hola { nombre }</h1>
        )
    }
}

export default  Saludo;