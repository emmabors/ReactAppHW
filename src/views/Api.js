import React, { Component } from "react";

export default class Api extends Component {
  constructor() {
    super();
    this.state = {
      Name: ''
    };
  }

  getName = async (name) => {
    const response = await fetch(`https://api.agify.io/?name=${name}`)
    const data =await response.json()
    console.log(data)

    const Name = data.name

    // setting the state
    this.setState({
      name: Name
    })
  }

  componentDidMount = () => {
    this.getName()
  }

searchName = (event) => {
  event.preventDefault()
  const Name = event.target.names.value
  console.log(Name)
}

  render() {
    return (
   <div>
  <h1>Pokemon Page</h1>
  <form onsubmit="{this.searchname}">
    <input name="names" placeholder="Enter Your Name" />
    <button>Submit</button>
  </form>
</div>

    )
  }
}
