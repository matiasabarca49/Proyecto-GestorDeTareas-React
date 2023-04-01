import React from 'react'

const TaskCommentary = ( { task } ) => {
  return (
    
    <div className='TaskCommentary'>
            <div className='TaskCommentary__title'>
                <h2>Comentarios:</h2>
                <button><img src="../img/comment.png" alt="comentar" /></button>
            </div>
                {task.comentary.length
                  ? task.comentary.map((comentary, index) => (
                      <div key={index} className='TaskCommentary__comment'> 
                        <p> {comentary.comentaryText }</p>

                      </div>
                    ))
                  : <p>Sin comentarios</p>
            }
                
    </div>
  )
}

export default TaskCommentary