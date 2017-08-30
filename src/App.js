import React, { Component } from 'react';
import logo from './logo.svg';
import Saludo from './components/Saludo'
import './App.css';

class App extends React.Component{
  render(){
    // Podria crear variables con const y agregar estado o lo que sea :).
    return(
      <div className="contenedor-github">
        <Saludo name="Claudio"></Saludo>
      </div>
    )
  }
}

export default App;