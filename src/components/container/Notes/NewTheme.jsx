import React, { useState } from 'react'
import { addThemeToBase } from '../../../data/basededatos'


const NewTheme = ( {setAddNewTheme } ) => {

  const [theme, setTheme] = useState("")
  const [text, setText] = useState()
  const [addNote, setAddNote] = useState(false)

  const handleAddTheme = () =>{
    const newTheme = {
      name: theme,
      Notas: text
      ? [{
        id: Date.now(),
        text: text
      } ] 
      : []
    }
    addThemeToBase(newTheme)
    setAddNewTheme(false)

  }

  return (
    <div className='NewTheme'>
            <form action="" onSubmit={  (e )=> e.preventDefault()  } >
                <button className='newTheme__btnClose' onClick={ () => setAddNewTheme(false) }>X</button>
                <div className='newTheme__theme'>
                  <label htmlFor="">Nombre del tema:</label>
                  <input type="text"  onChange={ (e) => setTheme(e.target.value) } value={ theme } required />
                </div>
                <button className='newTheme__btnAddNote' onClick={ ()=> setAddNote(!addNote) }> + Agregar Nota</button>
                {addNote && 
                <div>
                    <textarea name="" id="" cols="30" rows="10" onChange={ (e) => setText(e.target.value) } value={ text }/>
                </div>
                
                }
                <input className='newTheme__btnAddTheme' type="submit" value='Agregar' onClick={ handleAddTheme } />
            </form>
    </div>
  )
}

export default NewTheme