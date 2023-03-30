import React, { useState } from 'react'

const TaskDetail = ( { task }) => {

    const [checked, setChecked] = useState(task.completed)
    
    const handleChecked = () =>{
        task.completed = !checked
        setChecked(!checked)
        // console.log("checked: ",checked)
        console.log("task: ",task.completed)
    }
    console.log("checked: ",checked)

  return (
    <div>
        <div>
            <h1> {task.name} </h1>
            <h4> {task.date}</h4>
            <form action="">
                <label htmlFor="complete">Completada</label>
                <input  type='checkbox' defaultChecked={checked} onChange={ handleChecked } />
                
            </form>

        </div>
        <p> {task.description} </p>

    </div>
  )
}

export default TaskDetail