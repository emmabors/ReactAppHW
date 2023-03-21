import React, { Component } from 'react'

export default class Add2 extends Component {
    constructor() {
        console.log('I am being constructed')
        super()
        this.state = {
            intro: "Let's Start With 1...",
            number: 0
        }
    }

    addone = () => {
        console.log('button clicked')
        this.setState ({
            number: this.state.number + 2
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
        <br></br>
        <h2>Now Let's Count By 2...</h2>
        <h2>{this.state['number']}</h2>
        <button onClick={this.addone}>Couny by two!</button>
      </div>
    )
  }
}

