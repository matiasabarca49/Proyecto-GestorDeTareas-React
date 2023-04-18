import React from 'react'
import { deleteThemeFromBase } from '../../../../data/basededatos'
import { Droppable } from '@hello-pangea/dnd'
import NewNote from '../../../container/Notes/NewNote'
import NoteDraggable from './NoteDraggable'


const NoteDroppable = ({index, contNota, renderNotes,setRenderNotes}) => {

  return (
    <>
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
                    {contNota.Notas.map(  (nota,index) => 
                    <NoteDraggable contNota={contNota} nota={nota} index={index} setRenderNotes={setRenderNotes}/>
                    )}
                    {droppableProvided.placeholder}
                </div>
                <NewNote note={ contNota } setRenderNotes={ setRenderNotes } renderNotes={ renderNotes }/>
            </div> 
        )}        
    </Droppable>
    </>
  )
}

export default NoteDroppable