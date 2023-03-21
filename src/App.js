import './App.css';
import React, { Component } from 'react'
import Nav from './Nav';
import Home from './Home';
import Add2 from './Add2';
import Add3 from './Add3'




export default class App extends Component {
  constructor(){
    super()

  }
  render() {
    return (
      <div>
        <Nav/>
        <Home/>
        <Add2/>
        <Add3/>
      </div>
    )
  }
}


// export default App;
