import React, { useEffect, useState } from 'react'
import { getNotesBase } from '../../../data/basededatos';
import NewNote from './NewNote';
import NewTheme from './NewTheme';

const NotesContainer = () => {

  const [notes, setNotes] = useState()
  const [charge,setCharge] = useState(false)
  const [addNewNote, setAddNewNote] = useState(false)
  const [addNewTheme, setAddNewTheme] = useState(false)

  useEffect(() => {
    
    getNotesBase
      .then( res => {
        setNotes(res)
        setCharge(true)
      }  )
      .catch( error => console.log(error)  )

    }, [])
    
    console.log(notes)
    
  return (
    <div className='NotesContainer'>
      <h1>Notas</h1>

        {charge
        ?
          <div className='NotesContainer__contNotes'>
              {notes.map( (contNota,index) => (
              <div key={index} className=' NotesContainer__title'>
                <h4>{contNota.name}</h4>
                {contNota.Notas.map(  (nota,index) => (
                  <div key={index} className='NotesContainer__note'>
                    <button>X</button>
                    <p>{nota.text}</p>
                  </div>
                ) )}
                <button onClick={ () => setAddNewNote(!addNewNote) } ><img src="../img/addNote.png" alt="Agregar" style={{color:"#fff"}} /></button>
                {addNewNote && <NewNote /> }
              </div>
          ))}
          <button onClick={ ()=> setAddNewTheme( !addNewTheme ) }><img src="../img/addNoteTheme.png" alt="Agregar" /></button>
          {addNewTheme && <NewTheme />}
          </div>
        : <h3>Cargando...</h3>
        }
    </div>
  )
}

export default NotesContainer