import React from 'react'

const Comentary = ( {comentary} ) => {
  return (
    <div className='comentary'>
      <p>{comentary.comentaryText}</p>
    </div>
  )
}

export default Comentary