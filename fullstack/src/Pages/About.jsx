import React, { useContext } from 'react'
import State from '../hooks/State'
import Effect from '../hooks/Effect'
import Reducer from '../hooks/Reducer'
import { Link } from 'react-router-dom'
import { UserContext } from '../hooks/UserContext'
const About = () => {
  const name=useContext(UserContext)
  return (
    <div>
        <h1>Hi! {name} </h1>
        <Link to='/state'>UseState Example</Link> <br />
        <Link to='/form'>Controlled Form</Link> <br />
        <Link to='/effect'>Effect</Link> <br />
        <Link to='/reducer'>Reducer</Link>
    </div>
  )
}

export default About