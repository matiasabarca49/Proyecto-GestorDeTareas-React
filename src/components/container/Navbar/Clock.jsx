import React, { useEffect, useState } from 'react'

let date = new Date()
const days = ["Dom","Lun","Mar","Mie","Jue","Vie","Sab"]

const Clock = () => {
  
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    setInterval( () => {
      date = new Date()
      setHours(date.getHours())
      setMinutes(date.getMinutes())
      setSeconds(date.getSeconds())
    } ,500)
  
  }, [])
  

  return (
    <div className='clock'>
      <h6>{`${days[date.getDay()]}
            ${date.getDate() < 10
            ? `0${date.getDate()}`
            : date.getDate()}/${date.getMonth() + 1 < 10 
                                      ? `0${date.getMonth() + 1}`   
                                      : date.getMonth() + 1}`}
      </h6>
      <h5> {hours < 10?  `0${hours}` : hours}
        :
        {minutes < 10?  `0${minutes}` : minutes}
        <span>{seconds < 10?  `0${seconds}` : seconds}</span>
      </h5>
    </div>
  )
}

export default Clock