import React, { useState } from 'react'
import { Task } from '../../../models/task.class'
import { LEVELS } from '../../../models/levels.enum'
import { addTaskToBase } from '../../../data/basededatos'

const NewTaskModal = ( {setTasks, tasks, setAddTask } ) => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [level, setLevel] = useState( LEVELS.NORMAL)


    const addNewTask = () =>{
        const newTask =new Task(name, description, false, level)
        setTasks([...tasks, newTask])
        setAddTask(false)
        addTaskToBase(newTask)
    }


  return (
    <div className='newTaskModelCont'>
        <form className='newTaskModelCont__form' onSubmit={  (e) => e.preventDefault()  }>
            <button onClick={ () => setAddTask(false) } className='btn btnClose'>x</button>
            <div className='newTaskModelCont__form__info'>
                <div>
                    <label htmlFor="taskName">Nombre de la tarea:</label>
                    <input type="text" id='taskName' onChange={ e => setName(e.target.value)} value={name}/>
                </div>
                <div>
                    <label htmlFor="taskDescription"> Descripción: </label>
                    <input type="text" id='taskDescription' onChange={ e => setDescription(e.target.value)} value={ description }/>
                </div>
                <div>
                    <label htmlFor="levelTask"> Nivel de la Tarea:</label>
                    <select name="" id=" levelTask" onChange={ (e) => setLevel(e.target.value)}>
                        <option value={LEVELS.NORMAL}>Normal</option>
                        <option value={LEVELS.URGENT} >Urgente</option>
                        <option value={LEVELS.BLOCKING}>Bloqueante</option>
                    </select>
                </div>
            </div>
            <button onClick={ addNewTask } className='btn btnAdd'>Agregar</button>
        </form>
    </div>
  )
}

export default NewTaskModal