import React from 'react'
import { deleteNoteFromBase } from '../../../../data/basededatos'
import { Draggable } from '@hello-pangea/dnd'

const NoteDraggable = ( {contNota, nota, index, renderNotes, setRenderNotes} ) => {
  return (
    <>
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
    </>
  )
}

export default NoteDraggable