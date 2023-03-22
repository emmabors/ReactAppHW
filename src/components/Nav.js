import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class nav extends Component {
  render() {
    return (
     <div class='navs'>
 <ul  className="nav justify-content-center">
 <li class='link' className="nav-item">
    <Link className="nav-link" to="/">
      Home
    </Link>
  </li>
  <li class='link' className="nav-item">
    <Link className="nav-link" to="/Addition">
      Addition
    </Link>
  </li>
  <li class='link'className="nav-item">
    <Link className="nav-link" to="/Multiplication">Multiplication</Link>
  </li>
  <li class='link' className="nav-item">
    <Link className="nav-link" to="/Division">Division</Link>
  </li>
  <li class='link' className="nav-item">
    <Link className="nav-link" to="/todo">To Do List</Link>
  </li>
</ul>

</div>

    )
  }
}
