import React from 'react'
import Welcome from '../Welcome'
import Skills from '../Skills'
const Sevices = () => {
  return (
    <div>
      <h1>Sevice</h1>
        <Welcome name="Python"/>
     <Skills skills={['React','Node','Express','MongoDb']}/>
     <h1>Hello World</h1>
    </div>
  )
}

export default Sevices
