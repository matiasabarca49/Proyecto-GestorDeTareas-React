import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Comentary from './Comentary'

const TaskDetail = ( { task }) => {

    const [checked, setChecked] = useState(task.completed)
    
    const handleChecked = () =>{
        task.completed = !checked
        setChecked(!checked)
    }
    
  return (
    <div className='taskDetail'>
        <Link to='/' >  regresar  </Link>
        <div className='taskDetail__title'>
            <div>
                <h1> {task.name} </h1>
                <h4>{task.date}</h4>
            </div>
            <div>
                <form action="">
                    <label htmlFor="complete">Completada</label>
                    <input  type='checkbox' defaultChecked={checked} onChange={ handleChecked } />
                </form>
                <button>Eliminar</button>
            </div>
        </div>
        <div className='taskDetail__data'>
            <div className='taskDetail__data__description'>
                <p> {task.description} </p>
            </div>
            <div className='taskDetail__data__date'>
                <h4> Modificaciones</h4>
            </div>
        </div>
        <div>
            <h2>Comentarios:</h2>
                {task.comentary.length
                ? task.comentary.map((comentary,index) => (
                    <Comentary key={index} comentary={ comentary } />
                  ))
                : <p>Sin comentarios</p>
            }
                
        </div>
    </div>
  )
}

export default TaskDetail