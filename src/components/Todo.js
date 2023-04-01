
import React, { useState } from 'react';

export default function Todo() {
  const [list, setList] = useState([]);
  
  const onSubmits = (event) => {
    event.preventDefault();
    setList([...list,event.target.newtask.value]);
    console.log(list)
  };

  const displayItems = () => {
    return list.map((item)=>{
      return (
        <div>
        <li><input type="checkbox" class='cbox'></input> <label for="cbox3"> {item} </label></li>  
        </div>
      )
    })
  }




  return (
    <div class='todolist'>
      <br></br>
      <br></br>
      <h1>To-do list:</h1>
      <form onSubmit={onSubmits}>
        <input type='text' name='newtask'/>
        <button type='submit'>Add</button>
      </form>
      <ul>
        {displayItems()}
        
      </ul>
    </div>
  )
}

