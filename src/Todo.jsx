import React, { useState } from 'react'

function Todo() {
  
  const[task,setTask] = useState(['Gotta go bathroom','Gotta go for a walk','Time to sleep'])
  const[newTask,setNewTask] = useState("")

  function Changed(event){
    setNewTask(event.target.value)
  }
  function Add(){
    setTask(()=>[...task,newTask])
    setNewTask("");
  }
  function Remove(index){
    const updatedTasks = task.filter((_,i)=>i !== index);
    //instead of element we can use _ to say ignore this
    setTask(updatedTasks)
}
  return (
    <>
    <h3>To do list</h3>
    <input type="text" placeholder='Enter any text' value={newTask} onChange={Changed} />
    <button onClick={Add}>Add</button>
    <ul>
    {task.map((item,index)=>(
      
      <li key={index}>{item}
      <button onClick={()=>Remove(index)}>Delete</button>
      </li>
      
      
      
    ))}
    </ul>
    
    </>
  )
}

export default Todo