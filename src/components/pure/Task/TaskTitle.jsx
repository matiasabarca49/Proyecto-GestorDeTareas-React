import React from 'react'


const TaskTitle = ( {task, checked, setIsDelete, handleCheckedTask, handleDeleteTask} ) => {


  return (
    
          <div className='taskDetail__title'>
                    <div >
                        <h1> {task.name} </h1>
                        <h4>{task.date}</h4>
                    </div>
                    <div>
                        <form action="">
                            <label htmlFor="complete">Completada</label>
                            <input  type='checkbox' defaultChecked={checked} onChange={ handleCheckedTask } />
                        </form>
                        <button onClick={ () => handleDeleteTask(task.id) }><img src="../img/delete.png" alt="Eliminar" /></button>
                    </div>
            </div>
        

  )
}

export default TaskTitle