import React, { Component } from 'react'

export default class Home extends Component {
    constructor() {
        console.log('I am being constructed')
        super()
        this.state = {
            intro: "Let's Start With 1...",
            number: 0,
            todo: []
        }
    }

    addone = () => {
        console.log('button clicked')
        this.setState ({
            number: this.state.number + 1
        })
    }

componentDidMount = () => {
    console.log('Component Did Mount')
}

  render() {
    console.log('I am being rendered')
    return (
      <div class='home'>
        <br></br>
        <h1>Teach your child how to count here!</h1>
        <br></br>
        <br></br>
        <h2>{this.state['intro']}</h2>
        <h2>{this.state['number']}</h2>
        <button onClick={this.addone}>Couny by one!</button>
      </div>
    )
  }
}

