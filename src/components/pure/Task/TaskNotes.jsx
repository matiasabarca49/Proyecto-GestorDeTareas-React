import React, { useState } from 'react'
import { updateTaskInBase } from '../../../data/basededatos'

const TaskNotes = ( { task } ) => {

  const [newNote, setNewNote] = useState(false)
  const [note, setNote] = useState("")
  const [user, setUser] = useState()
  const [charge, setCharge] = useState(false)


  const deleteNote = (ID) =>{
    const notaEncontrada = task.notes.find( note => note.id === ID  )    
    const indice = task.notes.indexOf(notaEncontrada)   
    task.notes.splice(indice,1)
    updateTaskInBase()
    setCharge(!charge)
  }

  const addNote = () =>{

    const makeNote = {
      id: `task${task.id}-${Date.now()}`,
      noteText: note, 
      noteDate: new Date().toLocaleString(),
      noteUser: user
      }

      task.notes.push( makeNote )
      updateTaskInBase()
      setNewNote(false)
      
  }

  return (
    
    <div className='TaskCommentary'>
            
            <div className='TaskCommentary__title'>
                <h2>Notas:</h2>
                <button onClick={ () => setNewNote(!newNote) }><img src="../img/comment.png" alt="comentar" /></button>
                
            </div>

            {newNote &&
  
              <form className='newCommentForm' onSubmit={ e => e.preventDefault() }>
                <input  className='newCommentForm__comment' type='text' placeholder='Escriba un comentario' onChange={ e => setNote(e.target.value) } value={note}></input>
                <input className='newCommentForm__user' type="text" placeholder='Usuario' onChange={ e => setUser( e.target.value )  } />
                <button><img src="../img/send.png" alt="" onClick={ addNote } /></button>
              </form>

            }

            {task.notes.length
              ? task.notes.map((note, index) => (
                  <div key={index} className='TaskCommentary__comment'> 
                    <div className='TaskCommentary__content'>
                      <p className='TaskCommentary__content__text'>{note.noteText }</p>
                      <p className='TaskCommentary__content__date'>Anotado el {note.noteDate.split(",")[0]} a las {note.noteDate.split(",")[1] }</p>
                    </div>
                      <p className='TaskCommentary__content__user'>{note.noteUser}</p>
                      <button style={{cursor: "pointer"}}onClick={ () => deleteNote(note.id) }>X</button>
                  </div>
                ))
              : <p>Sin comentarios</p>
            }
                
                
    </div>
  )
}

export default TaskNotes