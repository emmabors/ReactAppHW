import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(){
    super()
    this.state =({
      todo: [],
      value: ''
    });
  }
  
  render() {
    const mylist = this.state.todo.map(todo => (
      <li className='todo_item'>{todo.value}
      <button>Edit</button>
      <button>Delete</button>
      </li>
    ));

    return (
      <div>
        <form>
        <input name='task' placeholder='Type task here' value=''></input>
        <button>Add</button>
        </form>
        <ul>
        {mylist}
      </ul>
      </div>
    )
  }
}

