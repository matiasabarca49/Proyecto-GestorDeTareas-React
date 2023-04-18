import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TaskInfo from '../../pure/Task/TaskInfo'
import TaskTitle from '../../pure/Task/TaskTitle'
import TaskNotes from '../../pure/Task/TaskNotes'
import { deleteTask, updateTaskInBase } from '../../../data/basededatos'

const TaskDetail = ( { task }) => {

    const [isDelete, setIsDelete] = useState(false)

    const [checked, setChecked] = useState(task.completed)
    
    const handleCheckedTask = () =>{
        task.completed = !checked
        setChecked(!checked)
        updateTaskInBase()
    }  

    const handleDeleteTask = ( ID ) =>{
        deleteTask(ID)
        setIsDelete(true)
    }

    
  return (

    <>
    
        {isDelete
        ? <h1>La tarea se eliminó </h1>
        :    <div className='taskDetail'>

                <Link to='/' >  <img src="../img/back.png" alt="regresar" />  </Link>

                <TaskTitle task={task} checked={ checked } setIsDelete={ setIsDelete } handleCheckedTask={ handleCheckedTask } handleDeleteTask={ handleDeleteTask } />

                <TaskInfo task={ task } />

                <TaskNotes task={task} />

            </div>
        }

    </>

  )
}

export default TaskDetail