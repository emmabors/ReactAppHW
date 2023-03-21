import React, { Component } from 'react'

export default class nav extends Component {
  render() {
    return (
     <div class='navs'>
 <ul  className="nav justify-content-center">
  <li class='link' className="nav-item">
    <a className="nav-link active" href="#">Addition</a>
    {this.props.currentUser}
  </li>
  <li class='link'className="nav-item">
    <a className="nav-link" href="#">Multiplication</a>
  </li>
  <li class='link' className="nav-item">
    <a className="nav-link" href="#">Division</a>
  </li>
  <li class='link' className="nav-item">
    <a className="nav-link" href="#">Advanced Math</a>
  </li>
</ul>

</div>

    )
  }
}
