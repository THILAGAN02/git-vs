import React from 'react'
import State from '../hooks/State'
import Effect from '../hooks/Effect'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
        <Link to='/state'>UseState Example</Link> <br />
        <Link to='/form'>Controlled Form</Link> <br />
        <Link to='/effect'>Effect</Link>
    </div>
  )
}

export default About