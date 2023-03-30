import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { Link } from 'react-router-dom'


const ComponentTask = ( {task} ) => {

 
  return (
    <div className='componentTask'>
        <h2 className='taskName'>{task.name}</h2>
        <h4 className='taskLevel'>Nivel: <span style={  
          task.level === "Urgente"
            ? {color:"orange"}
            : task.level === "Bloqueante"
                ? {color: "red"} 
                : {color: "white"}
          }> {task.level} </span></h4>
        <h4>Creado: <span> {task.date.split(",")[0]} </span></h4>
        <h4>Estado: <span style={ task.completed? ({color: "green"}) : ({color: "red"})}> {task.completed ? "COMPLETADA" : "PENDIENTE"} </span></h4>
        <Link to={`/task/${task.id}`} className='btn btnPrimary'> Ver más </Link> 
    </div>
  )
}

ComponentTask.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default ComponentTask