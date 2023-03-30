import React, { useEffect, useState } from 'react'
import { getBase } from '../../data/basededatos';
import ComponentTask from '../pure/ComponentTask'
import NewTaskModal from '../pure/NewTaskModal';


const ComponentTaskList = () => {

    const [tasks, setTasks] = useState([])
    const [carga, setCarga] = useState(false)
    const [addTask, setAddTask] = useState(false)
    
    useEffect(() => {
      
        getBase
            .then( res => setTasks(res))
            .catch(error => console.log(error))
        setCarga(true)
    
    }, [])
 
    return (
        <div className='componentTaskListCont'>
            <div>
                <h1>Tus tareas son: </h1>
            </div>
            {carga
                ?tasks.map( (tarea,index) => (
                    <ComponentTask key={index} task={tarea} />
                ))
                : <h2>Cargando....</h2>
            }
            <button className='componentTaskListCont__button' onClick={ () => setAddTask(!addTask) }>Agregar Nueva Tarea</button>
            {addTask && <NewTaskModal setTasks={  setTasks } tasks={ tasks} setAddTask={ setAddTask } />}
        </div>
  )
}

export default ComponentTaskList