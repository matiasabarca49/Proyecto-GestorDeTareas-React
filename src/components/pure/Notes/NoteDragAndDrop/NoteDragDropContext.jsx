import React from 'react'
import { DragDropContext } from '@hello-pangea/dnd'
import NoteDroppable from './NoteDroppable'

const NoteDragDropContext = ({ notes, renderNotes, setRenderNotes, moveNotes}) => {
  return (
    <>
        <DragDropContext onDragEnd={ (result) => moveNotes(result) } >

            {notes.map( (contNota,index) => (

                <NoteDroppable index={index} contNota={contNota} renderNotes={renderNotes} setRenderNotes={setRenderNotes}/>

            ))}

        </DragDropContext>
    </>
  )
}

export default NoteDragDropContext