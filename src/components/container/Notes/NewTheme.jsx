import React, { useState } from 'react'


const NewTheme = () => {

    const [addNote, setAddNote] = useState(false)

  return (
    <div className='NewTheme'>
            <form action="" onSubmit={  (e )=> e.preventDefault()  } >
                <label htmlFor="">Nombre del tema</label>
                <input type="text" />
                <button onClick={ ()=> setAddNote(!addNote) }>Agregar Nota</button>
                {addNote && 
                    <div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                
                }
                <input type="submit" value='agregar' />
            </form>
    </div>
  )
}

export default NewTheme