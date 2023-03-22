import './App.css';
import Nav from './components/Nav';
import Home from './views/Home';
import Add2 from './components/Add2';
import Add3 from './components/Add3';
import Api from './views/Api';
import Addition from './views/Addition';
import Todo from './components/Todo';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import React, { Component } from 'react'



export default class App extends Component {
  constructor(){
    super()

  }
  render() {
    return (
      <BrowserRouter>
      <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Api/>}/>
        <Route path='/' element={<Addition/>}/>
        </Routes>
        <Add2/>
        <Add3/>
        <Todo/>
        </div>
      </BrowserRouter>
    )
  }
}


// export default App;
