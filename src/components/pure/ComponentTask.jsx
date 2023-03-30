import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { Link } from 'react-router-dom'


const ComponentTask = ( {task} ) => {



  return (
    <div className='componentTask'>
        <h2 className='taskName'>{task.name}</h2>
        <h4>Nivel: {task.level}</h4>
        <h4>Estado: <span style={ task.completed? ({color: "green"}) : ({color: "red"})}> {task.completed ? "COMPLETADA" : "PENDIENTE"} </span></h4>
        <Link to={`/task/${task.id}`} className='btn'> Ver más </Link> 
    </div>
  )
}

ComponentTask.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default ComponentTask