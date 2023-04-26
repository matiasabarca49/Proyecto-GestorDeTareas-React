import React, { useEffect, useState } from 'react'
import { getNotesBase, updateNotesInBase } from '../../../data/basededatos';
import NewTheme from './NewTheme';
import NoteDragDropContext from '../../pure/Notes/NoteDragAndDrop/NoteDragDropContext';


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

  const moveNotes = (result) =>{
    console.log(result)
    const {source , destination} = result;
    console.log(`source: ${ source.droppableId}  || destination: ${ destination?.droppableId}`)
    if (!destination){
      return
    }
    else if (source.index === destination.index && source.droppableId === destination.droppableId){
      return
    }
    else if(source.droppableId !== destination.droppableId){
      const added = notes.find(  nota => nota.name === destination.droppableId )
      const removed = notes.find(  nota => nota.name === source.droppableId )
      added.Notas.splice(destination.index, 0, removed.Notas[source.index])
      removed.Notas.splice(source.index,1)
    } 
    else{
      const theme = notes.find(theme => theme.name === source.droppableId)
      const removed = theme.Notas[source.index]
      theme.Notas.splice(source.index,1)
      theme.Notas.splice(destination.index,0,removed)
    }
    updateNotesInBase()
  }

 
  return (
    <div className='NotesContainer'>
      <div className='NotesContainer__titleAndNewTask'>
        <h1>Notas:</h1>
        <button className='btnAddNewTheme' onClick={ () => setAddNewTheme( !addNewTheme ) }>
          <img src="../img/addNoteTheme.png" alt="Agregar" />
        </button>
      </div>

        {charge
        
          ?  <div className='NotesContainer__contNotes'>

              <NoteDragDropContext 
                notes={notes} 
                renderNotes={renderNotes} 
                setRenderNotes={setRenderNotes} 
                moveNotes={ moveNotes } />

              {/* <button onClick={ () => setAddNewTheme( !addNewTheme ) }>
                <img src="../img/addNoteTheme.png" alt="Agregar" />
              </button> */}

              {addNewTheme && <NewTheme setAddNewTheme={ setAddNewTheme } />}

            </div>

          : <h3>Cargando...</h3>
        }
    </div>
  )
}

export default NotesContainer