import React, { Component } from 'react';
import logo from './logo.svg';
import Saludo from './components/Saludo'
import './App.css';

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/

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