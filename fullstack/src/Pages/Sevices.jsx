import React from 'react'
import { useContext } from 'react'
import { ArrContext } from '../hooks/ArrContext'
const Sevices = () => {
  const Info=useContext(ArrContext)
  return ( 
    <div>
      <h1>Sevice</h1>
       <h1>{Info.name} <br /> {Info.age} <br /> {Info.branch}</h1>
    </div>
  )
}

export default Sevices
