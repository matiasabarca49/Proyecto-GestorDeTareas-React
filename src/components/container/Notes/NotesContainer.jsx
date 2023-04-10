import React, { useEffect, useState } from 'react'
import { getNotesBase, deleteNoteFromBase } from '../../../data/basededatos';
import NewNote from './NewNote';
import NewTheme from './NewTheme';

const NotesContainer = () => {

  const [notes, setNotes] = useState()
  const [charge,setCharge] = useState(false)
  const [renderNotes, setRenderNotes] = useState(false)
  const [addNewTheme, setAddNewTheme] = useState(false)

  useEffect(() => {
    
    getNotesBase
      .then( res => {
        setNotes(res)
        setCharge(true)
      }  )
      .catch( error => console.log(error)  )

    }, [])
    
  
  return (
    <div className='NotesContainer'>
      <h1>Notas</h1>

        {charge
        ?
          <div className='NotesContainer__contNotes'>
              {notes.map( (contNota,index) => (
              <div key={index} className=' NotesContainer__title'>
                <div className='NotesContainer__theme'>
                  <h4>{contNota.name}</h4>
                  <button >X</button>
                </div>
                {contNota.Notas.map(  (nota,index) => (
                  <div key={index} className='NotesContainer__note'>
                    <button  onClick={ () => {
                      deleteNoteFromBase( contNota.name, nota.id )
                      setRenderNotes(!renderNotes)
                      } }>X</button>
                    <p>{nota.text}</p>
                  </div>
                ) )}
                <NewNote note={ contNota } setRenderNotes={ setRenderNotes } renderNotes={ renderNotes }/>
              </div>
          ))}
          <button onClick={ ()=> setAddNewTheme( !addNewTheme ) }><img src="../img/addNoteTheme.png" alt="Agregar" /></button>
          {addNewTheme && <NewTheme setAddNewTheme={ setAddNewTheme } />}
          </div>
        : <h3>Cargando...</h3>
        }
    </div>
  )
}

export default NotesContainer