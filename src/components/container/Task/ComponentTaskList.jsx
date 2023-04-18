import React, { useEffect, useState } from 'react'
import { getTaskBase } from '../../../data/basededatos';
import ComponentTask from '../../pure/Task/ComponentTask';
import NewTaskModal from './NewTaskModal';

const ComponentTaskList = () => {

    const [tasks, setTasks] = useState([])
    const [carga, setCarga] = useState(false)
    const [addTask, setAddTask] = useState(false)
    
    useEffect(() => {
      
        getTaskBase
            .then( res => setTasks(res))
            .catch(error => console.log(error))
        setCarga(true)
    
    }, [])
 
    return (
        <div className='componentTaskListCont'>
            <div className='componentTaskListCont__title'>
                <h1>Tus tareas son: </h1>
                <button className='btn componentTaskListCont__button' onClick={ () => setAddTask(!addTask) }><img src='./img/addIcon.png' alt='agregar'/></button>
                {addTask && <NewTaskModal setTasks={  setTasks } tasks={ tasks} setAddTask={ setAddTask } />}
            </div>
            <div className='componentTaskListCont__taskList'>
                <div className='componentTaskListCont__encabezado'>
                    <h2>Tarea</h2>
                    <h3>Prioridad</h3>
                    <h4>Creación</h4>
                    <h4>Estado</h4>
                    <h4>Link</h4>
                </div>
                {carga
                    ?tasks.map( tarea  => (
                        <ComponentTask key={tarea.id} task={tarea} />
                        ))
                        : <h2>Cargando....</h2>
                    }
            </div>
        </div>
  )
}

export default ComponentTaskList
