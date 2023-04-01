import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getTask } from '../../data/basededatos'
import TaskDetail from './TaskDetail'

const TaskContDetail = () => {

  const [task, setTask] = useState()

    const { id } = useParams()
   

    useEffect(() => {
      
      getTask(id)
        .then( res => setTask(res))
        .catch( error => console.log(error))
    
      
    }, [id])
    

  return (
    <div>
      {task
        ?<TaskDetail task={ task } />
        : <h1>No se encontró la tarea</h1>
      }
    </div>
  )
}

export default TaskContDetail