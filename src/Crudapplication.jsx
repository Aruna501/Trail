import React, { useState } from 'react'
import { TbArrowBadgeRight } from "react-icons/tb";
import { PiSuitcaseFill } from "react-icons/pi";
import { v4 as uuid } from "uuid";
import Button from 'react-bootstrap/Button';

import './Crudapplication.css'

function Crudapplication() {

    const [data, setData] = useState([])
    const [input, setInput] = useState('')
    
const handleClick=()=>{
  setData([...data, {id: uuid(), task: input}])
  setInput('')
  }

  const handleDelete=(id)=>{
    const todoToDelete = data.find(todo => todo.id === id); 
    console.log(todoToDelete);
        if (todoToDelete && todoToDelete.marked) { 
const updatedData=data.filter(todo=>todo.id!==id)
setData(updatedData);
}
else{
  alert('The data need to strike out')
}
  }

  const handleMark = (id) => {
    const updatedData = data.map(todo => {
        if (todo.id === id) {
            return { ...todo, marked: !todo.marked };
        }
        return todo;
    });
    setData(updatedData);
};

const handleUpdate=(index)=>{
  const updatedtask = prompt('Update your task', data[index].task)
  let copiedData = [...data];
  copiedData[index].task = updatedtask;
  setData(copiedData);
}

  return (
    <div className='crud-main-container'>
      <h2>Add Your ToDo</h2>
      <div className='crud-sub-container'>
      <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <Button variant="primary" onClick={handleClick}>ADD <TbArrowBadgeRight /></Button>
      {data.map((todo,index)=>
        <div key={index}><PiSuitcaseFill />
        <span style={{ textDecoration: todo.marked ? 'line-through' : 'none' }}>
        {todo.task}
    </span>

    <button variant="primary" onClick={() => handleMark(todo.id)}>
                        {todo.marked ? 'Unmark' : 'Mark'}
                    </button>
                    <button onClick={()=>handleUpdate(index)}>Edit</button>
        <button variant="primary" onClick={() => handleDelete(todo.id)}> Delete</button>
        </div>)}
        {data.length === 0 && <h2>Enjoy the day!</h2>}
               </div>
               </div>
  )
}

export default Crudapplication
