import { Draggable } from '@hello-pangea/dnd'
import React from 'react'
import { Link } from 'react-router-dom'


const ComponentTask = ( {task, index} ) => {

 
  return (
    <Draggable draggableId={`${task.id}`} index={index}>
      {(draggableProvided, snapshot) =>(

        <div 
          {...draggableProvided.draggableProps}
          ref={draggableProvided.innerRef}
          /* {...draggableProvided.dragHandleProps} */
          className='componentTask'>
            <div className='moveTask' {...draggableProvided.dragHandleProps}>
              <img src="./img/moveUpAndDown2.png" alt="move" />
            </div>
            <h2 className='taskName'>{task.name}</h2>
            <h4 className='taskLevel' style={  
              task.level === "Medio"
                ? {color:"orange"}
                : task.level === "Alta"
                    ? {color: "red"} 
                    : {color: "white"}
              } > {task.level} </h4>
            <h4>{task.date.split(",")[0]}</h4>
            <h4 style={ task.completed? ({color: "green"}) : ({color: "red"})}> {task.completed ? "COMPLETADA" : "PENDIENTE"} </h4>
            <Link to={`/task/${task.id}`} className='btn btnPrimary'> Ver más </Link> 
        </div>
      )}
    </Draggable>
  )
}

export default ComponentTask