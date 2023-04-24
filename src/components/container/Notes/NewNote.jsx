import React, { useState } from 'react'
import { addNoteToBase } from '../../../data/basededatos'

const NewNote = ( { note, renderNotes, setRenderNotes } ) => {

  const [addNewNote, setAddNewNote] = useState(false)
  const [text, setText] = useState("")

  const handleNewNote = () =>{

    const newNota = {
      text: text
    }
    addNoteToBase( note.name, newNota )
    setRenderNotes(!renderNotes )
    setAddNewNote(false)
  }

  return (
    <div className='newNote'>
      <button onClick={ () => setAddNewNote(!addNewNote) }> <img src="../img/addNote.png" alt="Agregar" style={{color:"#fff"}} /> </button>
      {addNewNote &&  
      <form className='newNote__form' action="" onSubmit={ (e) => e.preventDefault()   }>
          <label htmlFor=""> Nota: </label>
          <textarea type="text" onChange={ (e) =>  setText(e.target.value)} value={ text }/>
          <button  onClick={ handleNewNote } > 
          + </button>
      </form>      
      }
    </div>
  )
}

export default NewNote