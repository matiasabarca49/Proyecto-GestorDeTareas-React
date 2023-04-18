import React from 'react'

const TaskInfo   = ( {task} ) => {
    
  return (
    <div className='taskDetail__data'>
            <div className='taskDetail__data__description'>
                <p> {task.description} </p>
            </div>
            <div className='taskDetail__data__date'>
                <h4> Modificaciones</h4>
            </div>
    </div>
  )
}

export default TaskInfo