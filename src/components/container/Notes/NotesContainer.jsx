import React, { useEffect, useState } from 'react'
import { getNotesBase, deleteNoteFromBase, deleteThemeFromBase } from '../../../data/basededatos';
import NewNote from './NewNote';
import NewTheme from './NewTheme';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

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
      console.log("Sali en el primer IF")
      return
    }
    else if (source.index === destination.index && source.droppableId === destination.droppableId){
      console.log("Sali en el segundo IF")
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
  }

 
  return (
    <div className='NotesContainer'>
      <h1>Notas</h1>

        {charge
        ?
          <div className='NotesContainer__contNotes'>
            <DragDropContext onDragEnd={ (result) => moveNotes(result) } >
              {notes.map( (contNota,index) => (
                <Droppable key={index} droppableId={contNota.name} > 
                {(droppableProvided, snapshot) => (
                  <div key={index} className=' NotesContainer__title' {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} style={{background:  snapshot.isDraggingOver? "#414649" : "#151617"}}>
                    <div className='NotesContainer__theme'>
                      <h4>{contNota.name}</h4>
                      <button onClick={
                        ()=>{
                          deleteThemeFromBase(contNota.name)
                          setRenderNotes(!renderNotes)
                        }
                      } >X</button>
                    </div>
                            <div>
                              {contNota.Notas.map(  (nota,index) => (
                                <Draggable key={`note${index}`} draggableId={`${contNota.name}-${index}`} index={index}>
                                  {(draggableProvided) => ( 
                                    <div 
                                      {...draggableProvided.draggableProps}
                                      ref={draggableProvided.innerRef}
                                      {...draggableProvided.dragHandleProps}
                                      key={index} className='NotesContainer__note'>
                                        <button  onClick={ () => {
                                          deleteNoteFromBase( contNota.name, nota.id )
                                          setRenderNotes(!renderNotes)
                                          } }>X</button>
                                        <p>{nota.text}</p>
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                              {droppableProvided.placeholder}
                            </div>
                    <NewNote note={ contNota } setRenderNotes={ setRenderNotes } renderNotes={ renderNotes }/>
                  </div> 
                )}        
                </Droppable>
              ))}
            </DragDropContext>
            <button onClick={ ()=> setAddNewTheme( !addNewTheme ) }><img src="../img/addNoteTheme.png" alt="Agregar" /></button>
            {addNewTheme && <NewTheme setAddNewTheme={ setAddNewTheme } />}
          </div>
        : <h3>Cargando...</h3>
        }
    </div>
  )
}

export default NotesContainer