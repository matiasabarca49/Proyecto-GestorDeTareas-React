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
    <div>
      <button onClick={ () => setAddNewNote(!addNewNote) }> <img src="../img/addNote.png" alt="Agregar" style={{color:"#fff"}} /> </button>
      {addNewNote &&  
            <form action="" onSubmit={ (e) => e.preventDefault()   }>
                <label htmlFor=""> Nota </label>
                <input type="text" onChange={ (e) =>  setText(e.target.value)} value={ text }/>
                <button  onClick={ handleNewNote } > Agregar </button>
            </form>      
      }
    </div>
  )
}

export default NewNote